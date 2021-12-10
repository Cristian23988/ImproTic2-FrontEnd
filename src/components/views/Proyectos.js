import Menu from "../MenuPrincipal";
import ContenidoMenu from "../ContenidoMenu";
import Footer from "../Footer";

const Proyectos = () => {
  return (
    <>
      <Menu />
      <ContenidoMenu>
        <h1 className="fst-italic">Gestionar proyectos </h1>
      </ContenidoMenu>
      <div className="position-absolute bottom-0 w-100 h-auto">
        <Footer />
      </div>
    </>
  );
};
export default Proyectos;
