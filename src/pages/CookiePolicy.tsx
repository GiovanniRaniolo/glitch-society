import { Cookie } from "lucide-react";
import { LegalPage } from "@/components/LegalPage";
import { PageMeta } from "@/components/PageMeta";
import { cookiesContent } from "@/content/cookies";

const CookiePolicy = () => (
  <>
    <PageMeta title={cookiesContent.title} path="/cookie-policy" />
    <LegalPage content={cookiesContent} icon={Cookie} />
  </>
);

export default CookiePolicy;
