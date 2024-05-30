"use server";

import { redirect } from "next/navigation";
import { Resend } from "resend";

export const ContactAction = async (formData: FormData) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const rawFormData = {
    senderName: formData.get("formName"),
    senderCompany: formData.get("formCompany"),
    senderService: formData.get("formService"),
    senderBudget: formData.get("formBudget"),
    senderDetails: formData.get("formDetails"),
    senderEmail: formData.get("formEmail"),
  };
  console.log(rawFormData);
  const plainTextContent = `
    Thank you, ${rawFormData.senderName} for reaching out!
    Here's a short recap of what you sent us:
    Company: ${rawFormData.senderCompany}
    Service: ${rawFormData.senderService}
    Budget: ${rawFormData.senderBudget}
    Details: ${rawFormData.senderDetails}
    Email: ${rawFormData.senderEmail}
    We'll make sure to get back to you asap!
  `;
  const { data, error } = await resend.emails.send({
    from: `Ethan's Support <noreply@ethancreates.dev>`,
    to: rawFormData.senderEmail as string,
    subject: "Thank you for reaching out!",
    text: plainTextContent,
  });
  console.log(data);

  if (error) {
    return Response.json({ error }, { status: 500 });
  }
  if (data) {
    return redirect("/email-sent");
  }
};
