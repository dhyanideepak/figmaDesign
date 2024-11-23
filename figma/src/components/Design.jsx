const Design=()=>{
    return (
      <>
        <div
          style={{
            display: "flex",
            gap: "40px",
            width: "1920px",
            padding:'60px 0px 60px 300px',
            height:'400px',

            backgroundColor: "#F5F7F8",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "648px",
              height:'300px',
              background: "linear-gradient(90deg, #CC522B 0%, #FF6636 100%)",
              paddingLeft: "30px",
            }}
          >
            <div
              style={{
                height: "270px",
              }}
            >
              <h1
                style={{
                  fontFamily: "Inter",
                  fontSize: "32px",
                  fontWeight: "600",
                  lineHeight: "40px",
                  letter: "-1%",
                  height: "40px",
                  width: "311px",
                }}
              >
                Become an instructor
              </h1>
              <h1
                style={{
                  width: "311px",
                  height: "66px",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "22px",
                  letter: "-1%",
                }}
              >
                Instructors from around the world teach millions of students on
                Udemy. We provide the tools and skills to teach what you love.
              </h1>
              <button
                style={{
                  width: "196px",
                  height: "48px",
                  padding: "0px 24px",
                  color: "#FF6636",
                }}
              >
                Start Teaching
              </button>
            </div>
            <div style={{ width: "248px", height: "270px" }}>
              <img
                style={{ height: "100%", width: "100%" }}
                src="https://s3-alpha-sig.figma.com/img/29bd/96c4/72eab052ddcd508f02e69e7f0166dd61?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fyZ-uHHDJnjaV0VrIdNEiLrxdxjc2TFzfuDxCLdG13O5dJ6ImfSJ6FBKvBDAisOWJDa45d45rJKeEBPV0ybDPz2GJrznUPYf0t8drk3bI2zNvKhQ8pCbmkpp-KMC2cNaB2BFxGx3BLuSiGdg8IQYFJJcvo4QiB4Axh6qDrvjClf1TQbFIX6vvB3JPS1gazEcCLnUH8s1-6iRV4bWszmK7xStZ9kKPDF3kxzm41HpkjU6fjznHqCbJ-8rIjskAqi1mQ6VerxKLxn3mVy4i0epZ0J28YKT4uSrvOjOp6JvJpXJw5Nefhz2pJl84oCAT3tjlHJaDYqB0Y7Q5-HJghy0pQ__"
                alt=""
              />
            </div>
          </div>
          <div
            style={{
              width: "648px",
              backgroundColor: "orange",
              paddingLeft: "40px",
              height:'300px'
            }}
          >
            <h1
              style={{
                fontFamily: "Inter",
                fontSize: "32px",
                fontWeight: "600",
                lineHeight: "40px",
                letter: "-1%",
                height: "40px",
                textAlign: "center",
              }}
            >
              Your teaching & earning steps
            </h1>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                gap: "20px",
              }}
            >
              <div style={{ width: "274px", height: "52px", display: "flex" }}>
                <div
                  style={{
                    height: "52px",
                    width: "52px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    backgroundColor: "#EBEBFF",
                    marginRight: "20px",
                  }}
                >
                  1
                </div>
                <p>Apply to become instructor</p>
              </div>
              <div
                style={{
                  width: "274px",
                  height: "52px",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    height: "52px",
                    width: "52px",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    display: "flex",
                    backgroundColor: "#EBEBFF",
                    marginRight: "20px",
                  }}
                >
                  2
                </div>
                <p>Build & edit your profile</p>
              </div>
              <div
                style={{
                  width: "274px",
                  height: "52px",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    height: "52px",
                    width: "52px",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    display: "flex",
                    backgroundColor: "#EBEBFF",
                    marginRight: "20px",
                  }}
                >
                  3
                </div>
                <p>Create your new course</p>
              </div>
              <div style={{ width: "274px", height: "52px", display: "flex" }}>
                <div
                  style={{
                    height: "52px",
                    width: "52px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    backgroundColor: "#EBEBFF",
                    marginRight: "20px",
                  }}
                >
                  4
                </div>
                <p>Start teaching & earning</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );

}
export default Design