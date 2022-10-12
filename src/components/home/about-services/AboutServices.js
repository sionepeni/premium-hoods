import "./aboutServices.css"
import ServiceCard from "../../card/ServiceCard"

export default function AboutServices() {
    const data = [
        {
            heading: "Kitchen Extraction Cleaning",
            text: "This area includes the oil drains and light fittings. And let's face it, a dirty hood covered in grease, oil, fat, soot, dust etc. is a slur on the good reputation of the chef and the restaurant.",
        },
        {
            heading: "Filter Cleaning",
            text: "Dirty, blocked, worn-out and poorly designed filters will reduce airflow leading to a hot kitchen as well as fat particles being deposited on ceilings, walls and cooking surfaces.",
        },
        {
            heading: "High Ceiling/ Wall Cleaning",
            text: "We clean and sanitize high walls, ceilings and light fittings. Like all our services, we cater to your business needs and will provide you with a scope that suits.",
        },
        {
            heading: "Flue Cleaning",
            text: "A buildup of oil, fat, grease, soot, dust and debris is a health and fire risk as it reduces air flow. Clean ducting ensures maximum efficiency from your extractor system.",
        },
        // {
        //     heading: "Flue Cleaning",
        //     text: "Our team are proficient in cleaning flues, from the hood all the way to the extraction fan.",
        // },
        // {
        //     heading: "Extract Fan Cleaning",
        //     text: "Our team have the ability to reach and access extract fans and are able to restore it to it's clean state.",
        // },
    ]

    return (
        <>
            <div className="about-services-main">
                <h1 className="about-services-h1">Services Provided</h1>
                {data.map((i) => (
                    <ServiceCard item={i} key={i.heading} />
                ))}
            </div>
        </>
    )
}
