import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import SimpleForm from "./SimpleForm";

const MailChimp = () => {
  const MailChimpLink = `https://${process.env.MAIL_CHIMP_URL}/subscribe/post?u=${process.env.MAIL_CHIMP_USER}&amp;id=${process.env.MAIL_CHIMP_ID}`;
  return (
    <MailchimpSubscribe
      url={MailChimpLink}
      render={({ subscribe, status, message }) => (
        <div>
          <SimpleForm onSubmitted={(formData: any) => subscribe(formData)} />
          {status === "sending" && (
            <div style={{ color: "blue" }}>sending...</div>
          )}
          {status === "error" && (
            <div
              style={{ color: "red" }}
              dangerouslySetInnerHTML={{ __html: message as string }}
            />
          )}
          {status === "success" && (
            <div style={{ color: "green" }}>Subscribed !</div>
          )}
        </div>
      )}
    />
  );
};

export default MailChimp;
