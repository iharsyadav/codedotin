import Alert from "../components/alert/Alert";
import ErrorAlert from "../components/alert/ErrorAlert";
import GlassAlert from "../components/alert/GlassAlert";
import GradientAlert from "../components/alert/GradientAlert";
import InfoAlert from "../components/alert/InfoAlert";
import SuccessAlert from "../components/alert/SuccessAlert";
import WarningAlert from "../components/alert/WarningAlert";

export default function AlertPage() {
  return (
    <>
      <Alert />

      <SuccessAlert />

      <ErrorAlert />

      <WarningAlert />

      <InfoAlert />

      <GlassAlert />

      <GradientAlert />
    </>
  );
}
