import globalStore from '@/store/globalStore';
import { capitalizeFirstLetter } from '@/utils/utils';
import React from 'react';
import TimePeriod from './TimePeriod';
import ExportButton, { EButton } from '../Buttons/ExportButton';
import DefaultButton from '../Buttons/DefaultButton';

export interface RPageHeader {
  pageTitle: string;
  hasTimePeriod?: boolean;
  exportButton?: EButton | undefined;
  defaultButton?: EButton | undefined;
}

function PageHeader(props: RPageHeader) {
  const {
    pageTitle = '',
    hasTimePeriod = false,
    exportButton: { title = '', active = false, action = null } = {},
    defaultButton: {
      title: addButtonTitle = '',
      active: addButtonActive = false,
      action: addButtonAction = null,
      icon,
    } = {},
  } = props;
  const { currentPage } = globalStore();

  return (
    <div className="flex justify-between h-20 items-center">
      <h2 className="text-2xl">{pageTitle}</h2>
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex items-center gap-2"
      >
        {hasTimePeriod && <TimePeriod />}
        {active && (
          <ExportButton title={title} active={active} action={action} />
        )}
        {addButtonActive && (
          <DefaultButton
            title={addButtonTitle}
            action={() => addButtonAction()}
            icon={icon}
          />
        )}
      </div>
    </div>
  );
}

export const renderPageHeader = (data: RPageHeader) => {
  const {
    pageTitle = '',
    hasTimePeriod = false,
    exportButton = undefined,
    defaultButton = undefined,
  } = data;

  return (
    <PageHeader
      pageTitle={pageTitle}
      hasTimePeriod={hasTimePeriod}
      exportButton={exportButton}
      defaultButton={defaultButton}
    />
  );
};

export default PageHeader;
