import { CardFooter } from "@chakra-ui/react";

const categoryDetails = [
  {
    name: "Label",
    number: "63,476 Courses",
  },
  {
    name: "Business",
    number: "52,822 Courses",
  },
  {
    name: "Finance & Accounting",
    number: "33,841 Courses",
  },
  {
    name: "IT & Software",
    number: "22,649 Courses",
  },
  {
    name: "Personal Development",
    number: "20,126 Courses",
  },
  {
    name: "Office Productivity",
    number: "13,932 Courses",
  },
  {
    name: "Marketing",
    number: "12,068 Courses",
  },
  {
    name: "Photography & Video",
    number: "6,196 Courses",
  },
  {
    name: "Design",
    number: "2,736 Courses",
  },
  {
    name: "Business",
    number: "52,822 Courses",
  },
  {
    name: "Finance & Accounting",
    number: "33,841 Courses",
  },
  {
    name: "IT & Software",
    number: "22,649 Courses",
  },
];

const colors = [
  "#EBEBFF",
  "#E1F7F3",
  "#FFF2E5",
  "#F5F7F4",
  "#EBEBFF",
  "#FFF2E5",
  "#FFEEE8",
  "#E1F7E3",
  "#EBEBFF",
  "#E1F7F3",
  "#FFF2E5",
  "#F5F7F4",
];


const Category = () => {
  return (
    <>
      <div style={{ height: "680px",width:'1320px',marginLeft:'400px',marginTop:'100px' }}>
        <h1
          style={{
            fontFamily: "Inter",
            fontSize: "40px",
            fontWeight: "600",
            lineHeight: "48px",
            letterSpacing: "-1%",
            height: "48px",
          }}
        >
          Browse top category
        </h1>
        <div style={{ height: "360px",display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'20px' }}>
          {categoryDetails.map((category, index) => {
            return ( 
              <div key={category.name + index} style={{backgroundColor:colors[index ],display:'flex',flexDirection:'column'}}> 
                <h1>{category.name}</h1>
                <p>{category.number}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};







export default Category;
