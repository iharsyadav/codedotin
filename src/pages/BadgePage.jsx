import Badge from "../components/badge/Badge";
import ErrorBadge from "../components/badge/ErrorBadge";
import InfoBadge from "../components/badge/InfoBadge";
import LiveBadge from "../components/badge/LiveBadge";
import NewBadge from "../components/badge/NewBadge";
import NotificationBadge from "../components/badge/NotificationBadge";
import PremiumBadge from "../components/badge/PremiumBadge";
import ProBadge from "../components/badge/ProBadge";
import SaleBadge from "../components/badge/SaleBadge";
import StatusBadge from "../components/badge/StatusBadge";
import SuccessBadge from "../components/badge/SuccessBadge";
import TagBadge from "../components/badge/TagBadge";
import TrendingBadge from "../components/badge/TrendingBadge";
import VerifiedBadge from "../components/badge/VerifiedBadge";
import WarningBadge from "../components/badge/WarningBadge";

export default function BadgePage() {
  return (
    <>
      <Badge />

      <SuccessBadge />

      <ErrorBadge />

      <WarningBadge />

      <InfoBadge />

      <PremiumBadge />

      <NewBadge />

      <ProBadge />

      <LiveBadge />
      <TagBadge />

      <SaleBadge />

      <TrendingBadge />

      <VerifiedBadge />

      <NotificationBadge />

      <StatusBadge />
    </>
  );
}
