/// <reference types="react-scripts" />

// SmtpJS exposes a variable `Email` on the global `window` object
declare namespace Email {
  type Attachment =
    | {
        name: string;
        path: string;
      }
    | {
        name: string;
        data: string; // base64 format
      };

  interface EmailData {
    SecureToken?: string;
    Host?: string;
    Username?: string;
    Password?: string;
    To: string | string[];
    From: string;
    Subject: string;
    Body: string;
    Attachments?: Attachment[];
  }

  function send(email: EmailData): Promise<string>;
}
