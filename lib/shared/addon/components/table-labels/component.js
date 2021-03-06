import { observer } from '@ember/object';
import { alias } from '@ember/object/computed';
import Component from '@ember/component';
import ManageLabels from 'shared/mixins/manage-labels';
import layout from './template';

export default Component.extend(ManageLabels, {
  layout,
  model           : null,

  labelSource     : alias('model'),
  sortBy          : 'kind',
  showKind        : true,
  descending      : true,
  labelIntlSec    : 'labelsSection',
  headers:     [
    {
      name:           'key',
      sort:           ['key'],
      translationKey: 'labelsSection.key',
      width:          '350',
    },
    {
      name:           'value',
      sort:           ['value','key'],
      translationKey: 'labelsSection.value',
    },
  ],

  labelsObserver: observer('model', function () {
    this.initLabels(this.get('labelSource'));
  }),

  didReceiveAttrs() {
    this.initLabels(this.get('labelSource'));
  },
});
