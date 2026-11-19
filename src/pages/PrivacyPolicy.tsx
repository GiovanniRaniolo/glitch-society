import { Shield } from "lucide-react";
import { LegalPage } from "@/components/LegalPage";
import { privacyContent } from "@/content/privacy";

const PrivacyPolicy = () => <LegalPage content={privacyContent} icon={Shield} />;

export default PrivacyPolicy;
