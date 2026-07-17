import { Suspense } from "react";

import { ContactPageContent } from "./content";

export default function ContactPage() {
  return (
    <Suspense>
      <ContactPageContent />
    </Suspense>
  );
}
