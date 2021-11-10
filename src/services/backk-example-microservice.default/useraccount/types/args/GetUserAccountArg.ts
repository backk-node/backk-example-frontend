// DO NOT MODIFY THIS FILE! This is an auto-generated file
import { DefaultPostQueryOperations, IsInstance, SortBy } from 'backk-frontend-utils';

export default class GetUserAccountArg extends DefaultPostQueryOperations {
  excludeResponseFields: string[] = [
    'ownSalesItems.primaryImageDataUri',
    'followedUserAccounts.ownSalesItems',
  ];

  @IsInstance(SortBy, {
    each: true,
  })
  sortBys: SortBy[] = [
    ...new DefaultPostQueryOperations().sortBys,
    new SortBy('paymentMethods', 'isDefault', 'DESC'),
    new SortBy('ownSalesItems', 'state', 'ASC'),
  ];
}
