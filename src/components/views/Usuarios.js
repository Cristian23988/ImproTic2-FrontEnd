import Menu from "../MenuPrincipal";
import ContenidoMenu from "../ContenidoMenu";
import Footer from "../Footer";
import RecordUsuario from "../Tables/RecordUsuario";

const Usuarios = () => {
  return (
    <>
      <Menu />
      <ContenidoMenu>
        <h1 className="fst-italic">Gestionar usuarios del sistema</h1>
        <div className="d-flex justify-content-start flex-row gap-5 flex-wrap w-100 p-5 overflow-scroll shadow">
          <RecordUsuario />
          <RecordUsuario /> <RecordUsuario /> <RecordUsuario />{" "}
          <RecordUsuario /> <RecordUsuario /> <RecordUsuario />{" "}
          <RecordUsuario />
        </div>
      </ContenidoMenu>
    </>
  );
};
export default Usuarios;
