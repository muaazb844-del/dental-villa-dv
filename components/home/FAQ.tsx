export default function FAQ() {
    const faqs = [
  {
    question: "How often should I have my teeth cleaned (Scaling & Polishing)?",
    answer:
      "Most people benefit from a professional cleaning every six months. Scaling removes plaque and tartar that brushing cannot reach, while polishing helps remove surface stains and leaves your teeth feeling smooth and clean. Regular cleanings also help prevent gum disease and bad breath.",
  },
  {
    question: "When do I need a filling?",
    answer:
      "A filling is needed when a tooth has a cavity or minor damage. If left untreated, the decay can spread deeper into the tooth and cause pain. Treating cavities early with a filling is a simple and effective way to restore your tooth and prevent more extensive treatment later.",
  },
  {
    question: "When is a root canal treatment necessary?",
    answer:
      "A root canal is recommended when the inside of the tooth (the pulp) becomes infected or badly damaged. Common signs include severe toothache, sensitivity to hot or cold, swelling, or pain while chewing. The procedure removes the infection, relieves pain, and helps save your natural tooth.",
  },
  {
    question: "Will a tooth extraction hurt?",
    answer:
      "Tooth extractions are performed under local anaesthesia, so you should not feel pain during the procedure. You may experience some mild soreness afterwards, which usually improves within a few days. We will provide clear aftercare instructions to help you recover comfortably and quickly.",
  },
  {
    question: "At what age should my child visit the dentist?",
    answer:
      "Children should have their first dental visit by their first birthday or within six months of their first tooth appearing. Early visits help monitor healthy tooth development, prevent dental problems, and make children feel comfortable and confident during future dental appointments.",
  },
  {
    question: "How can I prevent cavities and gum disease?",
    answer:
      "Brush your teeth twice a day with fluoride toothpaste, floss once a day, and reduce sugary foods and drinks. Regular dental check-ups and professional cleanings are equally important, as they help detect problems early and keep your teeth and gums healthy.",
  },
  {
    question:
      "Do you provide cosmetic dental treatments such as teeth whitening?",
    answer:
      "Yes. We offer cosmetic treatments to help improve the appearance of your smile, including professional teeth whitening and other smile-enhancing procedures. During your consultation, we will discuss your goals and recommend the treatment that best suits your needs.",
  },
  {
    question: "What should I do in a dental emergency?",
    answer:
      "If you have a severe toothache, a broken tooth, swelling, uncontrolled bleeding, or a knocked-out tooth, contact our clinic immediately. Prompt treatment can relieve pain, prevent complications, and increase the chances of saving the affected tooth.",
  },
];

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#0A2540]">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-600">
            Answers to some of the most common questions from our patients.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-6 shadow"
            >
              <h3 className="text-xl font-bold text-[#0A2540]">
                {faq.question}
              </h3>

              <p className="mt-3 text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}