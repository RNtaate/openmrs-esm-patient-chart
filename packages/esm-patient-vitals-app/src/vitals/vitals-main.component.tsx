import React from 'react';
import { useTranslation } from 'react-i18next';
import VitalsOverview from './vitals-overview.component';

interface VitalsMainProps {
  patientUuid: string;
  showAddVitals: boolean;
  basePath: string;
}

const VitalsMain: React.FC<VitalsMainProps> = ({ patientUuid, showAddVitals, basePath }) => {
  const pageSize = 10;
  const { t } = useTranslation();
  const pageUrl = window.spaBase + basePath + '/summary';
  const urlLabel = t('goToSummary', 'Go to Summary');

  return (
    <VitalsOverview
      patientUuid={patientUuid}
      showAddVitals={showAddVitals}
      pageSize={pageSize}
      urlLabel={urlLabel}
      pageUrl={pageUrl}
    />
  );
};

export default VitalsMain;
