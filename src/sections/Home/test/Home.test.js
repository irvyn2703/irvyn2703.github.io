import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../UI/Home";
import HomeBusiness from "../Business/HomeBusiness";

jest.mock("../Business/HomeBusiness");
const data = [
  { icon: "fa-solid fa-location-dot", text: "Puebla, México." },
  {
    icon: "fa-solid fa-phone",
    text: "+52 2226691915",
  },
  {
    icon: "fa-brands fa-linkedin",
    text: "Irvyn Xicale Cabrera",
    href: "https://www.linkedin.com/in/irvyn-xicale-cabrera-b627a1300",
  },
  {
    icon: "fa-brands fa-square-github",
    text: "irvyn2703",
    href: "https://github.com/irvyn2703",
  },
  {
    icon: "fa-solid fa-envelope",
    text: "irvynxicale@hotmail.com",
    href: "mailto:irvynxicale@hotmail.com",
  },
];

describe("<Home />", () => {
  beforeEach(() => {
    HomeBusiness.mockReturnValue({
      data,
      handleClicked: jest.fn(),
    });
  });

  test("renders Home component", () => {
    render(<Home />);
    const title = screen.getByText("Sobre mí");
    const description = screen.getByText(
      "Soy un desarrollador apasionado por crear aplicaciones que optimicen y automaticen procesos, con experiencia en el desarrollo de soluciones web y móviles dinámicas, escalables y centradas en el usuario. Manejo tecnologías modernas como React, React Native, Node.js y Java, y disfruto resolver problemas, innovar y mejorar continuamente mis habilidades."
    );

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  test("renders contact information", () => {
    render(<Home />);
    expect(screen.getByText("Puebla, México.")).toBeInTheDocument();
    expect(screen.getByText("+52 2226691915")).toBeInTheDocument();
    expect(screen.getByText("Irvyn Xicale Cabrera")).toBeInTheDocument();
    expect(screen.getByText("irvyn2703")).toBeInTheDocument();
    expect(screen.getByText("irvynxicale@hotmail.com")).toBeInTheDocument();
  });

  test("renders language information", () => {
    render(<Home />);
    expect(screen.getByText("Español")).toBeInTheDocument();
    expect(screen.getByText("Nativo")).toBeInTheDocument();
    expect(screen.getByText("Inglés")).toBeInTheDocument();
    expect(screen.getByText("Intermedio")).toBeInTheDocument();
  });

  test("calls handleClicked when 'Descargar CV' button is clicked", () => {
    const { handleClicked } = HomeBusiness();
    render(<Home />);
    const button = screen.getByText("Descargar CV");
    fireEvent.click(button);
    expect(handleClicked).toHaveBeenCalled();
  });

  test("renders icons links correct", () => {
    render(<Home />);
    const links = screen.getAllByRole("link");

    const hrefs = data.map((item) => item.href).filter(Boolean);

    links.forEach((link) => {
      if (link.href) {
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
        expect(hrefs).toContain(link.getAttribute("href"));
      }
    });
  });
});
