import { Shield } from "lucide-react";
import { LegalPage } from "@/components/LegalPage";
import { PageMeta } from "@/components/PageMeta";
import { privacyContent } from "@/content/privacy";

const PrivacyPolicy = () => (
  <>
    <PageMeta title={privacyContent.title} path="/privacy-policy" />
    <LegalPage content={privacyContent} icon={Shield} />
  </>
);

export default PrivacyPolicy;
