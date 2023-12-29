import React from "react";
import { Grid } from "@mui/material";
import { SelectCommon } from "@/components/core/select";
import { useParams } from "react-router";
import { URL_MEDIA } from "@/components/constants";
import { LastHeading, SecondHeading } from "@/components/core/heading";
import ButtonCustom from "@/components/core/buttonCustom";
import { Switch } from "@/components/ui/switch";
import ImageCustom from "@/components/core/imageCustom";
import { commonClass, commonClassSection } from "./style";

function ProfileUser() {
  const { idUser } = useParams();


  return (
    <div className="w-full py-10 md:w-[75%] m-auto">
      <div className="p-1 text-main-color-dark">
        <SecondHeading title={"Profile User"} />
      </div>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <section className=" mx-3">
            <div className={`${commonClass}`}>
              <div className="flex flex-wrap justify-center sm:justify-between px-5 py-2 items-center text-base">
                <div className="flex flex-col sm:flex-row  justify-center  gap-5 items-center ">
                  <ImageCustom src={URL_MEDIA.AVATAR_USER}
                    className="cover w-[70px]" />
                  <div className=" flex flex-col  text-center sm:text-left">
                    <strong> MUHESI </strong>
                    <span>MOSES </span>
                  </div>
                </div>
                <div className="p-5"> Rendre off </div>
              </div>
            </div>
            <div className={commonClassSection}>
              <LastHeading title={"Informations basiques"} />
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <InputCommon
                  required={true}
                  label="Nom"
                  pl="eg: Entrer votre nom"
                  onChange={(e) =>
                    console.clear()
                  }
                  value={""}
                />
                <InputCommon
                  required={true}
                  label="Prenon"
                  pl="eg: Entrer votre nom"
                  onChange={(e) =>
                    console.clear()
                  }
                  value={""}
                />
              </div>
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <InputCommon
                  required={true}
                  label="Addresse mail"
                  pl="Entrer votre adresse mail"
                  onChange={(e) =>
                    console.clear()
                  }
                  value={""}
                />
                <InputCommon
                  required={true}
                  disabled={true}
                  label="Role"
                  pl="Entrer votre role"
                  onChange={() => console.log("first")}
                  value={""}
                />
              </div>
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <InputCommon
                  label="Addresse physique"
                  pl="..."
                  onChange={() => console.log("first")}
                  value={""}
                  disabled={true}
                />
                <InputCommon
                  label="Telephone"
                  pl="Entrer votre numero de telephone"
                  onChange={(e) =>
                    console.clear()
                  }
                  value={""}
                />
              </div>
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <InputCommon
                  label="Addresse physique"
                  pl="..."
                  type="date"
                  onChange={(e) =>
                    console.clear()
                  }
                  value={''}
                />
                <SelectCommon
                  data={[
                    { id: "Masculin", label: "Masculin", value: "Masculin" },
                    { id: "Féminin", label: "Féminin", value: "Féminin" },
                    { id: "AUTRE", label: "AUTRE", value: "AUTRE" },
                  ]}
                  required={true}
                  keyObject="value"
                  label="Selectionner le genre"
                  onChange={(value: any) =>
                    //
                    console.clear()

                  }
                  value={""}
                />
              </div>
              <div className="btn p-3 mr-2 flex justify-end ">
                <BtnProfile
                  label="Mettre en jour"
                />
              </div>
            </div>
            <div className={commonClassSection}>
              <LastHeading title={"Changer mot de passe"} />
              <div className="py-2 px-5 gap-5 flex">
                <div className="flex-[98%]">
                  <InputCommon
                    autoComplete="off"
                    required={true}
                    label="Ancien mot de passe"
                    type="password"
                    pl="Entrer votre ancien mot de passe"
                    onChange={(e: any) =>
                      console.clear()
                    }
                    value={""}
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <div className="flex-[48%]">
                  <InputCommon
                    autoComplete="off"
                    required={true}
                    label="Nouveau mot de passe"
                    pl="Aumoins 6 caracteres"
                    type="password"
                    onChange={(e: any) =>
                      //
                      console.clear()
                    }
                    value={""}
                  />
                </div>
                <div className="flex-[48%]">
                  <InputCommon
                    autoComplete="off"
                    required={true}
                    type="password"
                    label=" Confirmer votre nouveau mot de passe"
                    pl="Aumoins 6 caracteres"
                    onChange={(e: any) =>
                      console.clear()
                    }
                    value={""}
                  />
                </div>
              </div>
              <div className="btn p-3 mr-2 flex justify-end ">
                <BtnProfile
                  label="Enregistrer"
                />
              </div>
            </div>
            <div className={commonClassSection}>
              <LastHeading title={"Parametres du compte"} />
              <div className="py-2  flex items-start space-x-2">
                <Switch id="airplane-mode" className="bg-gray-200" />
                <label htmlFor="airplane-mode" className="text-sm">
                  Rendre le compte inactif
                </label>
              </div>

              <div className="py-2  flex items-start space-x-2">
                <Switch id="airplane-mode" className="text-back" />
                <label htmlFor="airplane-mode" className="text-sm">
                  Rendre le compte actif
                </label>
              </div>
              {/* <div className="btn p-3 flex justify-end ">
                <Button
                  variant="primary"
                  style={{ border: "1px solid #2DAEC4" }}
                  className="ml-auto  rounded-md"
                >
                  Enregistrer
                </Button>
              </div> */}
            </div>
          </section>
        </Grid>
      </Grid>
    </div >
  );
}

export default ProfileUser;

function InputCommon({
  pl,
  label,
  onChange,
  value,
  type,
  required,
  disabled,
  autoComplete,
}: // className,
  {
    pl?: string;
    type?: string;
    onChange: (e: any) => void;
    label: string;
    value: string | number;
    required?: boolean;
    disabled?: boolean;
    className?: string;
    autoComplete?: "off" | "on";
  }) {
  return (
    <div className=" flex-auto p-0 my-1">
      <label className="text-sm block">
        {label}
        <span className="text-red-500"> {`${required ? "*" : ""}`} </span>
      </label>
      <input
        autoComplete={autoComplete}
        disabled={disabled ? disabled : false}
        onChange={onChange}
        placeholder={pl}
        value={value}
        type={type || "text"}
        className="w-full text-sm px-2 py-1 rounded-md border border-slate-300 "
      />
    </div>
  );
}
function BtnProfile({ label }: { label: string }) {
  return <ButtonCustom
    onClick={() => console.clear()}
    label={label}
    className="ml-auto  rounded-md  text-white bg-primary-100 hover:bg-secondary-100"
  />
}




