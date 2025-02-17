import { styled } from "@mui/system";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { MotionInView, varFadeInDown, varFadeInUp } from "../../atoms/animate";
import { ACTIONSDATA } from "./ActionEtEmpreinteCarbone.constant";
import only_leave from "../../../assets/images/only_leave.svg";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

export default function ActionEtEmpreinteCarbone() {
  return (
    <RootStyle>
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "42px",
            fontWeight: 900,
            lineHeight: "63px",
            textAlign: "center",
            color: "#10403B",
            mt: {
              md: 32,
              xs: 15,
            },
          }}
        >
          Un
          <span
            style={{
              color: "#C4E3D5",
              marginLeft: "0.5rem",
              marginRight: "0.5rem",
            }}
          >
            éco-coach
          </span>
          pour transformer vos
          <br /> bonnes intentions en
          <span
            style={{
              color: "#C4E3D5",
              marginLeft: "0.5rem",
            }}
          >
            actions
          </span>
          <span style={{ color: "#FAAA42" }}>.</span>
        </Typography>
        <Typography
          sx={{
            fontWeight: 700,
            textAlign: "center",
            fontSize: "32px",
            lineHeight: "48px",
            color: " #10403B",
            mt: 8,
            mb: 3,
          }}
        >
          Calculez, comprenez et réduisez votre empreinte carbone
        </Typography>
      </Grid>
      <Container
        direction={{ xs: "column", sm: "row" }}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          mb: {
            xs: 14,
          },
          mt: 7,
        }}
      >
        <Grid
          Container
          direction={{ xs: "column", sm: "row" }}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
            top: {
              xs: -70,
              md: -40,
            },
          }}
        >
          {ACTIONSDATA.map((item) => (
            <Grid
              item
              key={item.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                marginRight: "2rem",
                width: "330px",
              }}
            >
              <MotionInView variants={varFadeInUp}>
                <Box component="img" src={item.icon} />
              </MotionInView>
              <MotionInView variants={varFadeInDown}>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    fontFamily: "Lora",
                    lineHeight: "25.6px",
                    color: "#10403B",
                    fontSize: "21px",
                    fontWeight: 600,
                    mt: 5,
                    mb: 3,
                  }}
                >
                  {item.title}
                </Typography>
              </MotionInView>
              <MotionInView variants={varFadeInUp}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "19px",
                      fontFamily: "Lora",
                      textAlign: "inherit",
                      fontWeight: 400,
                      lineHeight: "27px",
                      color: "#10403B",
                    }}
                  >
                    {item.paragraphe}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                    mt: "20px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "19px",
                      textAlign: "inherit",
                      fontFamily: "Lora",
                      fontWeight: 400,
                      lineHeight: "27px",
                      color: "#10403B",
                    }}
                  >
                    {item.paragraphe2}
                  </Typography>
                </Box>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          component="img"
          src={only_leave}
          sx={{ height: "536px", width: "315px", zIndex: 6, mt: "-0.6rem" }}
        />
        <Box
          sx={{
            width: "100%",
            height: "526px",
            bgcolor: "#C4E3D5",
          }}
        >
          <Typography
            sx={{
              ml: "5000px",
              height: "133px",
              fontSize: { md: "24px", xs: "22px" },
              color: "#10403B",
              fontWeight: 700,
              lineHeight: "36px",
              margin: "69px 73px 0px 68px",
            }}
          >
            Saviez-vous que chaque Français doit réduire son empreinte carbone
            de 80% ?
          </Typography>
          <Typography
            sx={{
              color: "#10403B",
              fontFamily: "Lora",
              margin: "-55px 49px 69px 68px",
              lineHeight: "27px",
              fontSize: "21px",
            }}
          >
            Chaque Français doit passer de 11 tonnes de CO2e par an à 2 tonnes
            pour contenir la hausse de la
            <br /> température moyenne en dessous de +2°C.
            <br />
            <br /> En s’appuyant sur la base carbone de l’ADEME, OnlyOne a conçu
            un algorithme capable d’estimer
            <br /> en temps réel l’empreinte carbone de chaque transaction
            effectuée par carte de paiement !
          </Typography>
          <Button
            sx={{
              borderRadius: 50,
              bgcolor: "#2A7267 !important",
              "&:hover": { bgcolor: "#10403B  !important" },
              boxShadow: "none",
              margin: "30px 201px 0px 68px",
              fontSize: "16px",
              padding: "7px 38px 10px 38px",
            }}
            variant="contained"
            // href={PATH_PAGE.UnGesteUnImpact}
          >
            Comment estimer mon empreinte carbone?
          </Button>
        </Box>
      </Grid>
    </RootStyle>
  );
}
