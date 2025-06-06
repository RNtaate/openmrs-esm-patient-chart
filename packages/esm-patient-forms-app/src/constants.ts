import { restBaseUrl } from '@openmrs/esm-framework';

export const customFormRepresentation =
  '(uuid,name,display,encounterType:(uuid,name,viewPrivilege,editPrivilege),version,published,retired,resources:(uuid,name,dataType,valueReference))';
export const customEncounterRepresentation = `custom:(uuid,encounterDatetime,encounterType:(uuid,name,viewPrivilege,editPrivilege),form:${customFormRepresentation}`;

export const formEncounterUrl = `${restBaseUrl}/form?v=custom:${customFormRepresentation}`;
export const formEncounterUrlPoc = `${restBaseUrl}/form?v=custom:${customFormRepresentation}&q=poc`;

export const formEngineResourceName = 'formEngine';
export const htmlformentryFormEngine = 'htmlformentry';
export const uiStyleResourceName = 'uiStyle';
export const uiStyleSimple = 'simple';
