import * as React from "react";
import {
  Html,
  Head,
  Preview,
  Tailwind,
  Body,
  Container,
  Heading,
  Text,
} from "@react-email/components";

interface EmailTemplateProps {
  senderName: string;
  senderCompany?: string;
  senderService: string;
  senderBudget: string;
  senderDetails?: string;
  senderEmail: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  senderBudget,
  senderName,
  senderEmail,
  senderCompany,
  senderDetails,
  senderService,
}) => {
  return (
    <Html>
      <Head />
      <Preview>Thank you for reaching out to ethancreates.</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Heading>
              `Thank you, ${senderName} for reaching out to ethancreates.`
            </Heading>
            <Text>Please do wait for Ethan to reach out to you!</Text>
            <Text>
              While waiting here&apos;s a recap of what you&apos;ve sent us!
            </Text>
            <Heading>Your Answers:</Heading>
            <Text>
              Your Email: ${senderEmail}
              Service: ${senderService}
              Budget: ${senderBudget}
              Company: ${senderCompany}
              Additional Details: ${senderDetails}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
