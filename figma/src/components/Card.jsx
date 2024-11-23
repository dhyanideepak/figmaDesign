import { h1 } from "framer-motion/client";

const CardInfo = [
  {
    img: "https://s3-alpha-sig.figma.com/img/1707/10a9/3a038de4fe656f1f630251bdb519c7d2?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nPUPvl6ko0aXmKrM5EvhjQfAsui7onT4tgCAhAgsiVZK0kx16wrnu7BEqj-oJ9vBQ5EqmCaAKaY0OxDIMKjcNXkJfzsVhZx2r4~gCbatln1lmlMQQ2xZI2wl9hoOl5X1kk9UB9jNqGtGGqyANFfnLhvdfvRZhxv4~tgnXjxO8u0FgS7kT6tX5NwUF7KDh5WleU599aRYZB75eGPKU7SGYDMrVg0I5Tqhf7xq1U7qCxbEtcwGVQoWQQgb8TxAERJC1mWbBO415AnaBC~SNNUL1Ff~5OenO1QuJtN2BMQ8wZ694kWqXNkmFSN9DzrDFvRCgjNABkoRg92vOZabcWrz7g__",
    name: "Jane Cooper",
    occupation: "Adobe Instructor",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/aa56/f848/c9838eb938289dabb68eb23831e0bceb?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lcc0WdvPSggaJA6bM74WOPLAMKjOoIrnBsYbQeduuhbjrw9GlZ0zsUednTl-kyqNOa7mnhLJaMOaW~XxN920qoHifx1MrUIqu9gPCCzwUa91iPLn8RHqjQhEwRkACbodIymUhPcSBYI96T4u95Dv-D8PLaewx96Ab9OXwNhrCkFWAPe-ort0Pn1XvWwM9pEn1HFygx19vgDLlKHGIn1MohUsz1SveiF0DoApevzmsyoZ2MIy-Halh~QdKzO4vOxrRSe5m0-7mCJDX90rQhd37YaUqUYFItip33mbqlMGPr~l8qzOC4~v4VoFBltuMXavt9Wus6U2aOct36Km35jPSA__",
    name: "Jane Cooper",
    occupation: "Adobe Instructor",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/31f4/52e5/ca733a884c0323f3d0b0cfceea7cfbe6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aQlSQh5eifxgrygxWkmL~7lMB4f1OOqvoqd2oAPA0aAxTDANqMwRCDvCQmEN1EGI48dhFvrk7MaOoldTMAIl4Kxk3aWeh-QkDK4tyY1T-Lx7-h6dWGTGONVYoEDMEghpxDPWeh4zTJpiTHFV6k5pwyZf2PFysQXcJGdM8rHnLjaQURasVfk7PoKCZcXcHQbkUQ4DKXuwZinQbW5bIh7mdWcPOExyD2RatI~g21sTU19s676yxgw51BPwBS-HGv88jMcQ5s8q4T5xpcLwKd7TuedyXMkofiVZaQizZMgfJcwYGfstyF3cmaHKhzPA1iDwisj5lWb0WeveGIovp6WW1A__",
    name: "Jane Cooper",
    occupation: "Adobe Instructor",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/fde5/c9a9/a843ab0b52be736b6fc0fa1dbfc420de?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=grN7RN08do7N3-JcwmkqoRX5LqRG4kIV1DHC2APWEcLNWKp0N8o0WC0Zl89MNdl6~t6M5XdWuVE37xKgb9bAWAKS2xxJ-W0jO1GfqCU1bof04L9CckfVYwhu0O1MYOBHW9nSWrGL1P8FFgq74ORWkkHcOGSKwoxuBxXDM-UHvEVlvYZjw4FepRu0sFw3FDjNxZH3X8RfwPzfii79N6~Anilj330mlE2lOjXkE7MA~SCJUQT1y86pznfqWZ778fw4HyiNZj5GtL1lmJnHcWfPmrKtIM-kdBw3oKJIFEd6II81Hbnne6CAL1YWibCpYGl9cvRQLN2CGiZAUBnn90m6cQ__",
    name: "Jane Cooper",
    occupation: "Adobe Instructor",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/f814/dbe4/799d35d6bc29e2e2c2732d05d33b7557?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GIP9-pKcNkNvAkS6vuJ3twY5x3fSQ3-qAqmlUEUUORzVh-VAHrl-K8M9XNyRl-OEOVSrqEg~OZDjFPd5U-UBzylP-AgGHPs~5HPSH8YO2SMSbZq8EKCzxj2jgL9SD4wMd48hfgoDMpn71yQvn-FKLg8g7fW7zTle2aDmPLvgcFVf0c-HY7IFJbsEkj~X7MwhwbBv8GR417fV3LJPGEtYaSEydwEdVlw~RZ3-RGhojcz~b8~ic9j767VqKdbEzQWhcX6zpsEUlZkoTbE2Y9rbAv8ZS0MMCsxfZljQSJZ-t3mnLBCAhcmPI06v0ymBiPQPioE769VaywtfRZm2E-GFeQ__",
    name: "Jane Cooper",
    occupation: "Adobe Instructor",
  },
];

const Card = () => {
  return (
    <>
      <div style={{height:'600px',backgroundColor:'white',width:'1500px',padding:'50px 0px 50px 100px',position:'relative',top:'-100px',left:'250px'}}>
        <h1 style={{ alignItems: "center" }}>Top instructor of the month</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            width: "1920px",
            height: "400px",
          }}
        >
          {CardInfo.map((card, index) => (
            <div
              key={index}
              style={{
                width: "250px",
                height: "470px",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                textAlign: "center",
                border: "1px solid #ddd",
              }}
            >
              <img
                src={card.img}
                alt={card.name}
                style={{
                  width: "100%",
                  height: "50%",
                  objectFit: "cover",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                }}
              />
              <div style={{ padding: "15px" }}>
                <h3>{card.name}</h3>
                <p>{card.occupation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
