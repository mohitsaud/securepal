import sgMail from '@sendgrid/mail';

// Initialize SendGrid with your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export const sendQuoteRequest = async (formData: {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  securityNeeds: string;
}) => {
  const { fullName, email, phone, company, securityNeeds } = formData;

  const emailContent = {
    to: 'support@securepal.com.au',
    from: 'mohitdev4444@gmail.com',
    subject: `New Quote Request from ${fullName}`,
    html: `
      <h2>New Quote Request Details:</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Service Needs:</strong></p>
      <p>${securityNeeds}</p>
    `,
  };

  try {
    await sgMail.send(emailContent);
    return { success: true };
  } catch (error) {
    console.error('SendGrid Error:', error);
    return { success: false, error: 'Failed to send quote request email' };
  }
};
