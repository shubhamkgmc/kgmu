import { useState } from "react";
import { logoSrc, org } from "../../data";

/** Full-width white band under the header that holds the KGMU logo. */
export function LogoBar() {
  const [ok, setOk] = useState(true);
  if (!ok) return null;
  return (
    <div className="logobar">
      <img src={logoSrc} alt={`${org.university} logo`} onError={() => setOk(false)} />
    </div>
  );
}
