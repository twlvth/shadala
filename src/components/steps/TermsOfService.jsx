import React from "react";
import { IoDocuments } from "react-icons/io5";

export default function TermsOfService() {
  return (
    <div className="flex flex-col text-left">
      <div className="max-h-[300px] overflow-auto outline outline-gray-100 rounded-xl px-5">
        <h1 className="text-left my-2 font-semibold">
          {" "}
          Terms and Legal Conditions
        </h1>
        <hr className="my-2 border-t-2 border-gray-300" />

        <p className="my-2 text-sm">
          This Terms of Service ("Agreement") governs the use of design services
          provided by Shadala ("Company") to clients ("Client" or "Clients"). By
          accessing or using any services provided by the Company, Clients agree
          to be bound by these Terms of Service.
        </p>
        <h4 className="mb-2 font-semibold">Services</h4>
        <p className="my-2 text-sm">
          Shadala Logistics offers an extensive array of logistics solutions
          encompassing package delivery, transportation, and fulfillment
          services. The specific details and terms for each service engagement
          will be explicitly outlined in separate contractual agreements
          tailored to meet the unique requirements of our clients.
        </p>
        <h4 className="mb-2 font-semibold">Client Responsibilities</h4>
        <p className="my-2 text-sm">
          Users of Shadala Logistics services bear the responsibility of
          providing accurate and comprehensive shipment information. It is
          imperative that users ensure full compliance with local, national, and
          international laws governing the transportation of goods. Furthermore,
          users are obligated to obtain any requisite permits or licenses
          necessary for the lawful transport of their shipments.
        </p>
        <h4 className="mb-2 font-semibold">Delivery Times and Delays</h4>
        <p className="my-2 text-sm">
          While Shadala Logistics endeavors to deliver services punctually, it
          is important to acknowledge that various factors such as traffic
          congestion, adverse weather conditions, and other unforeseen
          circumstances may contribute to delays. Shadala Logistics shall not be
          held liable for delays beyond our reasonable control.
        </p>
        <h4 className="mb-2 font-semibold">Fees and Payments</h4>
        <p className="my-2 text-sm">
          The details pertaining to fees and payment terms for Shadala Logistics
          services will be clearly delineated in separate agreements or invoices
          issued to our esteemed clients. We prioritize transparency in our fee
          structures to foster mutual understanding and a trusting partnership.
        </p>
        <h4 className="mb-2 font-semibold">Liability</h4>
        <p className="my-2 text-sm">
          Shadala Logistics assumes no liability for damages to shipments beyond
          our direct control. Clients are strongly encouraged to assess the
          value of their shipments and consider purchasing insurance coverage
          for added protection against unforeseen events or damages during
          transit.
        </p>
        <h4 className="mb-2 font-semibold">Data Privacy</h4>
        <p className="my-2 text-sm">
          Shadala Logistics is committed to safeguarding your privacy. Our data
          privacy practices are detailed in our comprehensive Privacy Policy,
          which is readily accessible on our official website. We encourage
          users to review this policy to understand how we handle and protect
          their personal information.
        </p>
        <h4 className="mb-2 font-semibold">Termination</h4>
        <p className="my-2 text-sm">
          Either party may terminate logistics services by providing written
          notice to the other party. In the event of termination, any
          outstanding fees or obligations must be settled promptly.
        </p>
        <h4 className="mb-2 font-semibold">Governing Law</h4>
        <p className="my-2 text-sm">
          These terms are governed by and construed in accordance with the laws
          of the Republic of the Philippines. Any disputes arising from or
          related to these terms and services will be subject to the exclusive
          jurisdiction of the courts in the Republic of the Philippines.
        </p>
        <h4 className="mb-2 font-semibold">Changes to Terms</h4>
        <p className="my-2 text-sm">
          Shadala Logistics reserves the right to update or modify these terms
          at any time. Users will be duly informed of such changes to ensure
          transparency and continued alignment with our evolving services.
        </p>
        <hr className="my-2 border-t-2 border-gray-300" />
        <p className="my-2 text-sm">
          We express our gratitude for choosing Shadala Logistics as your
          logistics partner. We look forward to serving you with dedication,
          professionalism, and the highest standards of service excellence.
          Should you have any inquiries or require further clarification on
          these terms, please do not hesitate to contact us.
        </p>
      </div>

      <div class="flex items-center my-4">
        <input
          id="checkbox-1"
          type="checkbox"
          value=""
          class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="checkbox-1"
          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          I agree to the{" "}
          <a class="font-semibold text-teal-600 dark:text-teal-500">
            terms and conditions
          </a>
          .
        </label>
      </div>
    </div>
  );
}
