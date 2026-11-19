import { Cookie } from "lucide-react";
import { LegalPage } from "@/components/LegalPage";
import { cookiesContent } from "@/content/cookies";

const CookiePolicy = () => <LegalPage content={cookiesContent} icon={Cookie} />;

export default CookiePolicy;
