import { Fragment } from "react";
import { Link } from "react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { SlashIcon } from "lucide-react";

interface Breadcrumb {
  label: string;
  to: string;
}

interface Props {
  paginaActual: string;
  breadcrumbs?: Breadcrumb[];
}

export function Breadcrumbs({ paginaActual, breadcrumbs = [] }: Props) {
  return (
    <Breadcrumb className="my-5">
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link to="/" className="transition-colors hover:text-foreground">
            Inicio
          </Link>
        </BreadcrumbItem>

        {breadcrumbs.map((crumb, index) => (
          <Fragment key={`${crumb.to}-${index}`}>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <Link
                to={crumb.to}
                className="transition-colors hover:text-foreground"
              >
                {crumb.label}
              </Link>
            </BreadcrumbItem>
          </Fragment>
        ))}

        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>

        <BreadcrumbItem>
          <span className="text-black">{paginaActual}</span>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
