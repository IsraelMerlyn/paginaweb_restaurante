import { MenuB } from "../components/MenuButton";
import "./home.css";
import AboutImg from "../utils/img/about-img.jpg";
import { Link } from "react-router-dom";
import Comida from "../data/comida.json";
import Bebidas from "../data/bebidas.json";

export const Home = () => {
  return (
    <>
      <div className="home-page">
        <header className="h-100 min-vh-100 d-flex align-items-center text-light shadow">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center">
                <h2 className="mb-0 text-black fw-bold">Bienvenido a</h2>
                <h1 className="mb-5 text-black fw-bold text-center text-sm-start">
                  Mi Restaurante
                </h1>
                <MenuB />
              </div>
            </div>
          </div>
        </header>

        <div className="container my-5">
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
              <img
                src={AboutImg}
                className="img-fluid w-50 rounded"
                alt="about img"
              />
            </div>
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
              <h2 className="fs-1 mb-5 text-uppercase fw-bold">Acerca De</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Beatae, neque libero. Consequatur quisquam laboriosam
                cupiditate, sed similique corporis dolor placeat rem animi odio
                excepturi eum accusantium obcaecati, minima aliquid provident.
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate labore illo impedit possimus amet explicabo eos
                laboriosam laborum dolore libero consequatur error neque,
                commodi doloribus expedita aperiam id aliquam dolorem.
              </p>
              <Link to="/about">
                <button className="btn btn-outline-success btn-lg">
                  Mas Informacion
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="menu-section py-5 text-ligth shadow">
          <div className="container d-flex-column align-items-center">
            <h2 className="fs-1 mb-5 text-uppercase fw-bold text-white">Favoritos</h2>
            <div className="row mb-5 w-100">
              <div className="col-lg-6 d-flex flex-column align-items center mb-5 lg-0">
                <h3 className="fs-2 mb-5 text-white">Comida</h3>
                <ul className="px-0">
                  {Comida.map((comida) => (
                    <>
                      <li
                        key={comida.id}
                        className="d-flex justify-content-between"
                      >
                        <p className="fs-3 mx-2 text-white">{comida.name}</p>
                        <p className="fs-3 mx-2 text-success fw-bold">
                          {comida.price}
                        </p>
                      </li>
                    </>
                  ))}
                </ul>
              </div>

              <div className="col-lg-6 d-flex flex-column align-items center mb-5 lg-0">
                <h3 className="fs-2 mb-5 text-white">Bebidas</h3>
                <ul className="px-0">
                  {Bebidas.map((Bebidas) => (
                    <>
                      <li
                        key={Bebidas.id}
                        className="d-flex justify-content-between"
                      >
                        <p className="fs-3 mx-2 text-white">{Bebidas.name}</p>
                        <p className="fs-3 mx-2 text-success fw-bold">
                          {Bebidas.price}
                        </p>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
