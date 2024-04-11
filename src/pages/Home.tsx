import Section from "../components/Section";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <Section
        title={"Model 3"}
        description={"Leasing starting at $349/mon"}
        bgImg={"Homepage-Model-3-Desktop-LHD.jpeg"}
        LButton={"View Inventory"}
        RButton={"Custom Order"}
      ></Section>
      <Section
        title={"Model Y"}
        description={"From $37,490*"}
        bgImg={"Homepage-Model-Y-Global-Desktop.jpeg"}
        LButton={"Shop Available"}
        RButton={"Demo Drive"}
      ></Section>
      <Section
        title={"Model S"}
        description={"From $37,490*"}
        bgImg={"Model-S-homepage-desktop.jpeg"}
        LButton={"Shop Available"}
        RButton={"Demo Drive"}
      ></Section>
      <Section
        title={"Model X"}
        description={"From $37,490*"}
        bgImg={"Homepage-Model-X-Desktop-LHD.jpeg"}
        LButton={"Shop Available"}
        RButton={"Demo Drive"}
      ></Section>

      <Section
        title={"Solar Panels"}
        description={"Regna inte"}
        bgImg={"_25-HP-SolarPanels-D.jpeg"}
        LButton={"Shop Available"}
        RButton={"Demo Drive"}
      ></Section>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  margin-top: -10vh;
`;
