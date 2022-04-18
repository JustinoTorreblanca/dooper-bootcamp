import Image from "next/image";
import MainContainer from "@src/components/MainContainer";

const HomePage = () => {
  return (
    <MainContainer>
      <h1>Welcome to</h1>
      <Image
        src="/_next/image?url=%2Fassets%2Flogo-dooper.png&w=384&q=75"
        alt="dooper"
        width="200px"
        height="100px"
      />
    </MainContainer>
  );
};

export default HomePage;
