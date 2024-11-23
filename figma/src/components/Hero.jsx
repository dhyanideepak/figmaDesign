const Hero=()=>{
    return (
      <>
        <div
          style={{
            display: "flex",
            gap:'40px',
            width: "1920px",
            height:'548px',
            position: "relative",
            marginTop:'30px'
          }}
        >
          <div
            style={{
              width: "648px",
              height: "348px",
              position: "absolute",
              top: "100px",
              left: "300px",
            }}
          >
            <h1
              style={{
                fontFamily: "Inter",
                fontSize: "72px",
                fontWeight: "600",
                lineHeight: "74px",
                letter: "-2%",
                height: "148px",
              }}
            >
              Learn with expert anytime anywhere
            </h1>
            <p
              style={{
                fontFamily: "Inter",
                fontSize: "24px",
                fontWeight: "400",
                lineHeight: "32px",
                height: "64px",
                textAlign: "justify",
              }}
            >
              Our mision is to help people to find the best course online and
              learn with expert anytime, anywhere.
            </p>
          </div>
          <div
            style={{
              width: "900px",
              height: "548px",
              position: "absolute",
              
              left: "1020px",
            }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/f32a/4429/3732c213d9f03afa2d1ecc5c375b95f6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hgyP~b5xxoirKfiwihgrMx~~8GoKCrC-U1uM2C3HQForC46bA7RZoeuwdEmNs2QBRKRY4rb-nchBN6YYx-ib3D5E6zMQzLipXFlMP7bePXjZHYLGtgiO0YuJy2sh8JkLzEdDnPvSWORLrAMcB7GVuZ4UpebIZdfl7Kv5Na6WW7dB31wuBX8TrV87cIwzPK99lTorX8TaLSWkK1qy4cQXd~WkZDDL9W6AqKzXg8ncyhix8btWd2jOTCY01i96E6HeGeCB-gR-EqTlc5QSKBjv2beM3LE7lj0AFUFOMZw64AY0Y-2X9SWFOky3PENAJ7BY-2ru4qTMhzVeWbmnOXbJbw__"
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>
      </>
    );
}

export default Hero;