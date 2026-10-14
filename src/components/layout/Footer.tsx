import { contactLines } from "../../data";

export function Footer() {
  return (
    <footer id="contact" className="foot">
      <div>
        <h2>Need help from the IT Cell?</h2>
        <p>
          Log a complaint through the helpdesk mobile number or the WhatsApp group. Say which department and room you
          are in and describe the problem.
        </p>
      </div>
      <ul>
        {contactLines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </footer>
  );
}
