import { contactLines, helpdeskNumber } from "../../data";

export function Footer() {
  return (
    <footer id="contact" className="foot">
      <div>
        <h2>Need help from the IT Cell?</h2>
        <p>
          Call the IT helpdesk on {helpdeskNumber} or use the WhatsApp group. Say which department and room you are in
          and describe the problem.
        </p>
      </div>
      <ul>
        {contactLines.map((line) => (
          <li key={line.text}>{line.href ? <a href={line.href}>{line.text}</a> : line.text}</li>
        ))}
      </ul>
    </footer>
  );
}
