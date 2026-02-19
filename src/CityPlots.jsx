import { CardType } from "./CardType";

export function CityPlots() {
  const cityplots = [
    {
      id: 1,
      pic: "https://newprojects.99acres.com/projects/amudha_civil_construction/amudha_spring_and_splendid/images/xwfwcrs_1769084031_702591341_med.jpg",
      header: "Rayora Land Developers",
      title: "RA PURAM Plots",
      district: "Chennai",
      type: [
        {
          typeOne: "3 BHK Apartment",
          amountOne: "₹2.4 Cr - ₹5 Cr",
          typeTwo: "2 BHK Apartment",
          amountTwo: "₹1.5 Cr - ₹2.2 Cr",
        },
      ],
      verified: true,
    },
    {
      id: 2,
      pic: "https://newprojects.99acres.com/projects/amudha_civil_construction/amudha_spring_and_splendid/images/xwfwcrs_1769084031_702591341_med.jpg",
      header: "Rayora Land Developers",
      title: "RA PURAM Plots",
      district: "Chennai",
      type: [
        {
          typeOne: "3 BHK Apartment",
          amountOne: "₹2.1 Cr - ₹5 Cr",
          typeTwo: "2 BHK Apartment",
          amountTwo: "₹1.1 Cr - ₹2.2 Cr",
        },
      ],
      verified: true,
    },
  ];
  return (
    <div>
      {cityplots.map((plot) => (
        <CardType
          key={plot.id}
          pic={plot.pic}
          header={plot.header}
          district={plot.district}
          title={plot.title}
          verified={plot.verified}
          type={plot.type}
        />
      ))}
    </div>
  );
}
