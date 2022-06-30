export type Maybe<T> = T | null;

export interface NewAccountResourceScores {
  AccountId: string;

  Blacklisted?: Maybe<boolean>;

  ResourceId: string;

  Whitelisted?: Maybe<boolean>;
}

export interface NewAccountTags {
  AccountId: string;

  Required?: Maybe<boolean>;

  TagId: string;

  Weighting?: Maybe<number>;
}

export interface NewAccounts {
  BillingCity?: Maybe<string>;

  BillingPostalCode?: Maybe<string>;

  BillingState?: Maybe<string>;

  BillingStreet?: Maybe<string>;

  Fax?: Maybe<string>;

  Name: string;

  Phone?: Maybe<string>;

  Rank?: Maybe<number>;

  RequiresWhitelist?: Maybe<boolean>;

  ShippingCity?: Maybe<string>;

  ShippingPostalCode?: Maybe<string>;

  ShippingState?: Maybe<string>;

  ShippingStreet?: Maybe<string>;
}

export interface NewActivities {
  Address?: Maybe<string>;

  CopiedFromId?: Maybe<string>;

  End: string;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  LocationId?: Maybe<string>;

  Notes?: Maybe<string>;

  Quantity?: Maybe<number>;

  ResourceId?: Maybe<string>;

  ScheduleTemplateId?: Maybe<string>;

  Start: string;

  TemplatedActivityId?: Maybe<string>;

  Timezone?: Maybe<string>;

  Type?: Maybe<string>;
}

export interface NewActivityResources {
  ActivityId: string;

  ResourceId: string;
}

export interface NewAttendees {
  CancelReason?: Maybe<string>;

  ContactId: string;

  JobId: string;

  Status?: Maybe<AttendeeStatus>;

  TimeCancelled?: Maybe<string>;
}

export interface NewAvailabilities {
  Finish: string;

  IsAvailable?: Maybe<boolean>;

  Notes?: Maybe<string>;

  ResourceId: string;

  Start: string;

  Status?: Maybe<AvailabilityStatus>;

  Type?: Maybe<string>;
}

export interface NewAvailabilityPatternResources {
  AvailabilityPatternId: string;

  End?: Maybe<string>;

  ResourceId: string;

  Start: string;

  Status?: Maybe<AvailabilityStatus>;
}

export interface NewAvailabilityPatterns {
  Description?: Maybe<string>;

  Hash: string;

  Name: string;

  Pattern: string;
}

export interface NewAvailabilityTemplateEntries {
  AvailabilityTemplateId: string;

  FinishTime: number;

  IsAvailable?: Maybe<boolean>;

  StartTime: number;

  Weekday: Weekday;
}

export interface NewAvailabilityTemplateResources {
  AvailabilityTemplateId: string;

  Migrated?: Maybe<boolean>;

  ResourceId: string;
}

export interface NewAvailabilityTemplates {
  AvailabilityPatternId?: Maybe<string>;

  Finish?: Maybe<LocalDate>;

  Global?: Maybe<boolean>;

  Name?: Maybe<string>;

  Start?: Maybe<LocalDate>;
}

export interface NewClientAvailabilities {
  AccountId?: Maybe<string>;

  ContactId?: Maybe<string>;

  End: string;

  IsAvailable?: Maybe<boolean>;

  PreferredEnd?: Maybe<string>;

  PreferredStart?: Maybe<string>;

  RecurringScheduleId?: Maybe<string>;

  Start: string;
}

export interface NewContactTags {
  ContactId: string;

  Required?: Maybe<boolean>;

  TagId: string;

  Weighting?: Maybe<number>;
}

export interface NewContacts {
  AccountId?: Maybe<string>;

  Email?: Maybe<string>;

  FirstName?: Maybe<string>;

  LastName: string;

  MailingCity?: Maybe<string>;

  MailingPostalCode?: Maybe<string>;

  MailingState?: Maybe<string>;

  MailingStreet?: Maybe<string>;

  MobilePhone?: Maybe<string>;

  OtherCity?: Maybe<string>;

  OtherPostalCode?: Maybe<string>;

  OtherState?: Maybe<string>;

  OtherStreet?: Maybe<string>;

  Phone?: Maybe<string>;

  RegionId?: Maybe<string>;

  Title?: Maybe<string>;
}

export interface NewEduMeSettings {
  ApiKey?: Maybe<string>;

  Name?: Maybe<string>;
}

export interface NewErrorLogs {
  Log?: Maybe<string>;

  Name?: Maybe<string>;

  Payload?: Maybe<string>;
}

export interface NewHolidayRegions {
  HolidayId: string;

  RegionId: string;
}

export interface NewHolidays {
  EndDate: LocalDate;

  Global?: Maybe<boolean>;

  Name: string;

  StartDate: LocalDate;
}

export interface NewJobAllocations {
  DeclineDescription?: Maybe<string>;

  DeclineReason?: Maybe<string>;

  Duration?: Maybe<number>;

  End?: Maybe<string>;

  EstimatedTravelDistance?: Maybe<number>;

  EstimatedTravelTime?: Maybe<number>;

  GeoCheckedInLatitude?: Maybe<number>;

  GeoCheckedInLongitude?: Maybe<number>;

  GeoCompletedLatitude?: Maybe<number>;

  GeoCompletedLongitude?: Maybe<number>;

  GeoInProgressLatitude?: Maybe<number>;

  GeoInProgressLongitude?: Maybe<number>;

  GeoStartTravelLatitude?: Maybe<number>;

  GeoStartTravelLongitude?: Maybe<number>;

  JobId: string;

  NotificationType?: Maybe<string>;

  PhoneResponse?: Maybe<string>;

  ResourceId: string;

  ResourceRequirementId?: Maybe<string>;

  Start?: Maybe<string>;

  Status?: Maybe<JobAllocationStatus>;

  TeamLeader?: Maybe<boolean>;

  TimeCheckedIn?: Maybe<string>;

  TimeCompleted?: Maybe<string>;

  TimeInProgress?: Maybe<string>;

  TimePublished?: Maybe<string>;

  TimeResponded?: Maybe<string>;

  TimeStartTravel?: Maybe<string>;

  TravelDistance?: Maybe<number>;

  TravelTime?: Maybe<number>;
}

export interface NewJobDependencies {
  FromAnchor?: Maybe<JobDependencyAnchor>;

  FromJobId: string;

  ToAnchor?: Maybe<JobDependencyAnchor>;

  ToAnchorMaxOffsetMinutes?: Maybe<number>;

  ToAnchorMinOffsetMinutes?: Maybe<number>;

  ToJobId: string;
}

export interface NewJobOffers {
  CreatedByResource?: Maybe<boolean>;

  JobId: string;

  ResourceRequirementId?: Maybe<string>;

  Status?: Maybe<OfferStatus>;
}

export interface NewJobProducts {
  JobId: string;

  ProductId?: Maybe<string>;

  Qty: number;
}

export interface NewJobTags {
  JobId: string;

  Required?: Maybe<boolean>;

  TagId: string;

  Weighting?: Maybe<number>;
}

export interface NewJobTasks {
  Completed?: Maybe<boolean>;

  Description?: Maybe<string>;

  JobId: string;

  Name: string;

  Seq: number;
}

export interface NewJobTimeConstraints {
  EndBefore?: Maybe<string>;

  JobId: string;

  Required?: Maybe<boolean>;

  StartAfter?: Maybe<string>;

  StartBefore?: Maybe<string>;

  Type?: Maybe<JobTimeConstraintType>;
}

export interface NewJobs {
  AbortReason?: Maybe<string>;

  AccountId?: Maybe<string>;

  ActualEnd?: Maybe<string>;

  ActualStart?: Maybe<string>;

  Address?: Maybe<string>;

  AutoSchedule?: Maybe<boolean>;

  CanBeDeclined?: Maybe<boolean>;

  CompletionNotes?: Maybe<string>;

  ContactId?: Maybe<string>;

  CopiedFromId?: Maybe<string>;

  CustomerConfirmationStatus?: Maybe<CustomerConfirmationStatus>;

  Description?: Maybe<string>;

  Duration: number;

  End?: Maybe<string>;

  EstimatedEnd?: Maybe<string>;

  EstimatedStart?: Maybe<string>;

  FollowupReason?: Maybe<string>;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  IsGroupEvent?: Maybe<boolean>;

  JobAllocationTimeSource?: Maybe<boolean>;

  JobStatus?: Maybe<JobStatus>;

  LocationId?: Maybe<string>;

  Locked?: Maybe<boolean>;

  MaxAttendees?: Maybe<number>;

  MinAttendees?: Maybe<number>;

  ModuleId?: Maybe<number>;

  Name?: Maybe<string>;

  NotesComments?: Maybe<string>;

  NotifyBy?: Maybe<string>;

  NotifyPeriod?: Maybe<number>;

  ParentId?: Maybe<string>;

  Quantity?: Maybe<number>;

  RecurringScheduleId?: Maybe<string>;

  RegionId: string;

  ScheduleTemplateId?: Maybe<string>;

  Start?: Maybe<string>;

  TemplatedJobId?: Maybe<string>;

  Type?: Maybe<string>;

  Urgency?: Maybe<string>;

  VirtualMeetingId?: Maybe<string>;

  VirtualMeetingInfo?: Maybe<string>;

  VirtualMeetingURL?: Maybe<string>;
}

export interface NewLocationResourceScores {
  Blacklisted?: Maybe<boolean>;

  LocationId: string;

  ResourceId: string;

  Whitelisted?: Maybe<boolean>;
}

export interface NewLocations {
  AccountId?: Maybe<string>;

  Address?: Maybe<string>;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  Name: string;

  RegionId?: Maybe<string>;

  RequiresWhitelist?: Maybe<boolean>;

  Type?: Maybe<string>;
}

export interface NewProducts {
  Description?: Maybe<string>;

  Family?: Maybe<string>;

  IsActive?: Maybe<boolean>;

  Name: string;

  ProductCode?: Maybe<string>;
}

export interface NewRecurringSchedules {
  AckAllJobs?: Maybe<boolean>;

  Description?: Maybe<string>;

  Pattern?: Maybe<string>;

  Summary?: Maybe<string>;
}

export interface NewRegions {
  CountryCode?: Maybe<string>;

  Description?: Maybe<string>;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  Name: string;

  Radius?: Maybe<number>;

  Timezone: string;
}

export interface NewResourceJobOffers {
  JobOfferId: string;

  ResourceId: string;

  Response?: Maybe<OfferResponse>;

  Status?: Maybe<ResourceOfferStatus>;

  TimeNotified?: Maybe<string>;

  TimeResponded?: Maybe<string>;
}

export interface NewResourceOverrideRegions {
  RegionId: string;

  ResourceOverrideId: string;
}

export interface NewResourceOverrides {
  Description?: Maybe<string>;

  End: string;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  HomeAddress?: Maybe<string>;

  ResourceId: string;

  Start: string;
}

export interface NewResourceRegions {
  End?: Maybe<string>;

  RegionId: string;

  ResourceId: string;

  Start?: Maybe<string>;
}

export interface NewResourceRequirementTags {
  Required?: Maybe<boolean>;

  ResourceRequirementId: string;

  TagId: string;

  Weighting?: Maybe<number>;
}

export interface NewResourceRequirements {
  Description?: Maybe<string>;

  Duration?: Maybe<number>;

  JobAllocationTimeSource?: Maybe<boolean>;

  JobId: string;

  Quantity: number;

  RelativeStart?: Maybe<number>;

  ScheduledEnd?: Maybe<string>;

  ScheduledStart?: Maybe<string>;

  Status?: Maybe<JobStatus>;
}

export interface NewResourceShiftBreaks {
  End?: Maybe<string>;

  ResourceShiftId: string;

  Start: string;
}

export interface NewResourceShiftOffers {
  ResourceId: string;

  Response?: Maybe<OfferResponse>;

  ShiftOfferId: string;

  Status?: Maybe<ResourceOfferStatus>;

  TimeNotified?: Maybe<string>;

  TimeResponded?: Maybe<string>;
}

export interface NewResourceShifts {
  ActualEnd?: Maybe<string>;

  ActualStart?: Maybe<string>;

  ResourceId: string;

  ShiftId: string;
}

export interface NewResourceTags {
  ExpiryDate?: Maybe<string>;

  ResourceId: string;

  TagId: string;
}

export interface NewResources {
  Alias?: Maybe<string>;

  AutoSchedule?: Maybe<boolean>;

  Category?: Maybe<string>;

  CountryCode?: Maybe<string>;

  Email?: Maybe<string>;

  EmploymentType?: Maybe<string>;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  HomeAddress?: Maybe<string>;

  IsActive?: Maybe<boolean>;

  MobilePhone?: Maybe<string>;

  Name: string;

  Notes?: Maybe<string>;

  NotificationType?: Maybe<string>;

  PrimaryPhone?: Maybe<string>;

  PrimaryRegionId: string;

  Rating?: Maybe<number>;

  ResourceType?: Maybe<string>;

  TeamId?: Maybe<number>;

  UserId?: Maybe<string>;

  WeeklyHours?: Maybe<number>;

  WorkingHourType?: Maybe<WorkingHourType>;
}

export interface NewScheduleTemplates {
  DeletedById?: Maybe<string>;

  DeletedDate?: Maybe<string>;

  Description?: Maybe<string>;

  IsDeleted?: Maybe<boolean>;

  Name: string;

  PeriodDays?: Maybe<number>;
}

export interface NewShiftOfferShifts {
  ShiftId: string;

  ShiftOfferId: string;
}

export interface NewShiftOffers {
  Status?: Maybe<OfferStatus>;
}

export interface NewShiftTags {
  Required?: Maybe<boolean>;

  ShiftId: string;

  TagId: string;

  Weighting?: Maybe<number>;
}

export interface NewShifts {
  CopiedFromId?: Maybe<string>;

  DisplayName?: Maybe<string>;

  Duration?: Maybe<number>;

  End?: Maybe<string>;

  IsDraft?: Maybe<boolean>;

  LocationId?: Maybe<string>;

  RegionId?: Maybe<string>;

  ScheduleTemplateId?: Maybe<string>;

  Start?: Maybe<string>;

  TemplatedShiftId?: Maybe<string>;
}

export interface NewTags {
  Classification?: Maybe<TagClassification>;

  Name: string;

  Type?: Maybe<string>;
}

export interface NewTemplatedActivities {
  Address?: Maybe<string>;

  Duration: number;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  LocationId?: Maybe<string>;

  Notes?: Maybe<string>;

  Quantity?: Maybe<number>;

  ResourceId?: Maybe<string>;

  ScheduleTemplateId: string;

  StartOffsetDays: number;

  StartTimeOfDay: LocalTime;

  Timezone: string;

  Type?: Maybe<string>;
}

export interface NewTemplatedActivityResources {
  ResourceId: string;

  TemplatedActivityId: string;
}

export interface NewTemplatedAttendees {
  ContactId: string;

  TemplatedJobId: string;
}

export interface NewTemplatedJobAllocations {
  Duration?: Maybe<number>;

  NotificationType?: Maybe<string>;

  ResourceId: string;

  StartOffsetDays?: Maybe<number>;

  StartTimeOfDay?: Maybe<LocalTime>;

  Status?: Maybe<JobAllocationStatus>;

  TeamLeader?: Maybe<boolean>;

  TemplatedJobId: string;

  TemplatedResourceRequirementId?: Maybe<string>;
}

export interface NewTemplatedJobDependencies {
  FromAnchor?: Maybe<JobDependencyAnchor>;

  FromTemplatedJobId: string;

  ToAnchor?: Maybe<JobDependencyAnchor>;

  ToAnchorMaxOffsetMinutes?: Maybe<number>;

  ToAnchorMinOffsetMinutes?: Maybe<number>;

  ToTemplatedJobId: string;
}

export interface NewTemplatedJobProducts {
  ProductId?: Maybe<string>;

  Qty: number;

  TemplatedJobId: string;
}

export interface NewTemplatedJobTags {
  Required?: Maybe<boolean>;

  TagId: string;

  TemplatedJobId: string;

  Weighting?: Maybe<number>;
}

export interface NewTemplatedJobTasks {
  Completed?: Maybe<boolean>;

  Description?: Maybe<string>;

  Name: string;

  Seq: number;

  TemplatedJobId: string;
}

export interface NewTemplatedJobTimeConstraints {
  EndBeforeOffsetDays?: Maybe<number>;

  EndBeforeTimeOfDay?: Maybe<LocalTime>;

  Required?: Maybe<boolean>;

  StartAfterOffsetDays?: Maybe<number>;

  StartAfterTimeOfDay?: Maybe<LocalTime>;

  StartBeforeOffsetDays?: Maybe<number>;

  StartBeforeTimeOfDay?: Maybe<LocalTime>;

  TemplatedJobId: string;

  Type: JobTimeConstraintType;
}

export interface NewTemplatedJobs {
  AccountId?: Maybe<string>;

  Address?: Maybe<string>;

  AutoSchedule?: Maybe<boolean>;

  CanBeDeclined?: Maybe<boolean>;

  ContactId?: Maybe<string>;

  CustomerConfirmationStatus?: Maybe<CustomerConfirmationStatus>;

  Description?: Maybe<string>;

  Duration: number;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  IsGroupEvent?: Maybe<boolean>;

  JobAllocationTimeSource?: Maybe<boolean>;

  LocationId?: Maybe<string>;

  Locked?: Maybe<boolean>;

  MaxAttendees?: Maybe<number>;

  MinAttendees?: Maybe<number>;

  NotesComments?: Maybe<string>;

  NotifyPeriod?: Maybe<number>;

  Quantity?: Maybe<number>;

  RegionId: string;

  ScheduleTemplateId: string;

  StartOffsetDays: number;

  StartTimeOfDay: LocalTime;

  Type?: Maybe<string>;

  Urgency?: Maybe<string>;

  VirtualMeetingId?: Maybe<string>;

  VirtualMeetingInfo?: Maybe<string>;

  VirtualMeetingURL?: Maybe<string>;
}

export interface NewTemplatedResourceRequirementTags {
  Required?: Maybe<boolean>;

  TagId: string;

  TemplatedResourceRequirementId: string;

  Weighting?: Maybe<number>;
}

export interface NewTemplatedResourceRequirements {
  Description?: Maybe<string>;

  JobAllocationTimeSource?: Maybe<boolean>;

  Quantity: number;

  RelativeStart?: Maybe<number>;

  TemplatedJobId: string;
}

export interface NewTemplatedResourceShifts {
  ResourceId: string;

  TemplatedShiftId: string;
}

export interface NewTemplatedShiftTags {
  Required?: Maybe<boolean>;

  TagId: string;

  TemplatedShiftId: string;

  Weighting?: Maybe<number>;
}

export interface NewTemplatedShifts {
  DisplayName?: Maybe<string>;

  Duration: number;

  IsDraft?: Maybe<boolean>;

  LocationId?: Maybe<string>;

  RegionId: string;

  ScheduleTemplateId: string;

  StartOffsetDays: number;

  StartTimeOfDay: LocalTime;
}

export interface NewUserRegions {
  RegionId: string;

  UserId: string;
}

export interface UpdateAccountResourceScores {
  AccountId?: Maybe<string>;

  Blacklisted?: Maybe<boolean>;

  ResourceId?: Maybe<string>;

  UID: string;

  Whitelisted?: Maybe<boolean>;
}

export interface UpdateAccountTags {
  AccountId?: Maybe<string>;

  Required?: Maybe<boolean>;

  TagId?: Maybe<string>;

  UID: string;

  Weighting?: Maybe<number>;
}

export interface UpdateAccounts {
  BillingCity?: Maybe<string>;

  BillingPostalCode?: Maybe<string>;

  BillingState?: Maybe<string>;

  BillingStreet?: Maybe<string>;

  Fax?: Maybe<string>;

  Name?: Maybe<string>;

  Phone?: Maybe<string>;

  Rank?: Maybe<number>;

  RequiresWhitelist?: Maybe<boolean>;

  ShippingCity?: Maybe<string>;

  ShippingPostalCode?: Maybe<string>;

  ShippingState?: Maybe<string>;

  ShippingStreet?: Maybe<string>;

  UID: string;
}

export interface UpdateActivities {
  Address?: Maybe<string>;

  CopiedFromId?: Maybe<string>;

  End?: Maybe<string>;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  LocationId?: Maybe<string>;

  Notes?: Maybe<string>;

  Quantity?: Maybe<number>;

  ResourceId?: Maybe<string>;

  ScheduleTemplateId?: Maybe<string>;

  Start?: Maybe<string>;

  TemplatedActivityId?: Maybe<string>;

  Timezone?: Maybe<string>;

  Type?: Maybe<string>;

  UID: string;
}

export interface UpdateActivityResources {
  ActivityId?: Maybe<string>;

  ResourceId?: Maybe<string>;

  UID: string;
}

export interface UpdateAttendees {
  CancelReason?: Maybe<string>;

  ContactId?: Maybe<string>;

  JobId?: Maybe<string>;

  Status?: Maybe<AttendeeStatus>;

  TimeCancelled?: Maybe<string>;

  UID: string;
}

export interface UpdateAvailabilities {
  Finish?: Maybe<string>;

  IsAvailable?: Maybe<boolean>;

  Notes?: Maybe<string>;

  ResourceId?: Maybe<string>;

  Start?: Maybe<string>;

  Status?: Maybe<AvailabilityStatus>;

  Type?: Maybe<string>;

  UID: string;
}

export interface UpdateAvailabilityPatternResources {
  AvailabilityPatternId?: Maybe<string>;

  End?: Maybe<string>;

  ResourceId?: Maybe<string>;

  Start?: Maybe<string>;

  Status?: Maybe<AvailabilityStatus>;

  UID: string;
}

export interface UpdateAvailabilityPatterns {
  Description?: Maybe<string>;

  Hash?: Maybe<string>;

  Name?: Maybe<string>;

  Pattern?: Maybe<string>;

  UID: string;
}

export interface UpdateAvailabilityTemplateEntries {
  AvailabilityTemplateId?: Maybe<string>;

  FinishTime?: Maybe<number>;

  IsAvailable?: Maybe<boolean>;

  StartTime?: Maybe<number>;

  UID: string;

  Weekday?: Maybe<Weekday>;
}

export interface UpdateAvailabilityTemplateResources {
  AvailabilityTemplateId?: Maybe<string>;

  Migrated?: Maybe<boolean>;

  ResourceId?: Maybe<string>;

  UID: string;
}

export interface UpdateAvailabilityTemplates {
  AvailabilityPatternId?: Maybe<string>;

  Finish?: Maybe<LocalDate>;

  Global?: Maybe<boolean>;

  Name?: Maybe<string>;

  Start?: Maybe<LocalDate>;

  UID: string;
}

export interface UpdateClientAvailabilities {
  AccountId?: Maybe<string>;

  ContactId?: Maybe<string>;

  End?: Maybe<string>;

  IsAvailable?: Maybe<boolean>;

  PreferredEnd?: Maybe<string>;

  PreferredStart?: Maybe<string>;

  RecurringScheduleId?: Maybe<string>;

  Start?: Maybe<string>;

  UID: string;
}

export interface UpdateContactTags {
  ContactId?: Maybe<string>;

  Required?: Maybe<boolean>;

  TagId?: Maybe<string>;

  UID: string;

  Weighting?: Maybe<number>;
}

export interface UpdateContacts {
  AccountId?: Maybe<string>;

  Email?: Maybe<string>;

  FirstName?: Maybe<string>;

  LastName?: Maybe<string>;

  MailingCity?: Maybe<string>;

  MailingPostalCode?: Maybe<string>;

  MailingState?: Maybe<string>;

  MailingStreet?: Maybe<string>;

  MobilePhone?: Maybe<string>;

  OtherCity?: Maybe<string>;

  OtherPostalCode?: Maybe<string>;

  OtherState?: Maybe<string>;

  OtherStreet?: Maybe<string>;

  Phone?: Maybe<string>;

  RegionId?: Maybe<string>;

  Title?: Maybe<string>;

  UID: string;
}

export interface UpdateEduMeSettings {
  ApiKey?: Maybe<string>;

  Name?: Maybe<string>;

  UID: string;
}

export interface UpdateErrorLogs {
  Log?: Maybe<string>;

  Name?: Maybe<string>;

  Payload?: Maybe<string>;

  UID: string;
}

export interface UpdateHolidayRegions {
  HolidayId?: Maybe<string>;

  RegionId?: Maybe<string>;

  UID: string;
}

export interface UpdateHolidays {
  EndDate?: Maybe<LocalDate>;

  Global?: Maybe<boolean>;

  Name?: Maybe<string>;

  StartDate?: Maybe<LocalDate>;

  UID: string;
}

export interface UpdateJobAllocations {
  DeclineDescription?: Maybe<string>;

  DeclineReason?: Maybe<string>;

  Duration?: Maybe<number>;

  End?: Maybe<string>;

  EstimatedTravelDistance?: Maybe<number>;

  EstimatedTravelTime?: Maybe<number>;

  GeoCheckedInLatitude?: Maybe<number>;

  GeoCheckedInLongitude?: Maybe<number>;

  GeoCompletedLatitude?: Maybe<number>;

  GeoCompletedLongitude?: Maybe<number>;

  GeoInProgressLatitude?: Maybe<number>;

  GeoInProgressLongitude?: Maybe<number>;

  GeoStartTravelLatitude?: Maybe<number>;

  GeoStartTravelLongitude?: Maybe<number>;

  JobId?: Maybe<string>;

  NotificationType?: Maybe<string>;

  PhoneResponse?: Maybe<string>;

  ResourceId?: Maybe<string>;

  ResourceRequirementId?: Maybe<string>;

  Start?: Maybe<string>;

  Status?: Maybe<JobAllocationStatus>;

  TeamLeader?: Maybe<boolean>;

  TimeCheckedIn?: Maybe<string>;

  TimeCompleted?: Maybe<string>;

  TimeInProgress?: Maybe<string>;

  TimePublished?: Maybe<string>;

  TimeResponded?: Maybe<string>;

  TimeStartTravel?: Maybe<string>;

  TravelDistance?: Maybe<number>;

  TravelTime?: Maybe<number>;

  UID: string;
}

export interface UpdateJobDependencies {
  FromAnchor?: Maybe<JobDependencyAnchor>;

  FromJobId?: Maybe<string>;

  ToAnchor?: Maybe<JobDependencyAnchor>;

  ToAnchorMaxOffsetMinutes?: Maybe<number>;

  ToAnchorMinOffsetMinutes?: Maybe<number>;

  ToJobId?: Maybe<string>;

  UID: string;
}

export interface UpdateJobOffers {
  CreatedByResource?: Maybe<boolean>;

  JobId?: Maybe<string>;

  ResourceRequirementId?: Maybe<string>;

  Status?: Maybe<OfferStatus>;

  UID: string;
}

export interface UpdateJobProducts {
  JobId?: Maybe<string>;

  ProductId?: Maybe<string>;

  Qty?: Maybe<number>;

  UID: string;
}

export interface UpdateJobTags {
  JobId?: Maybe<string>;

  Required?: Maybe<boolean>;

  TagId?: Maybe<string>;

  UID: string;

  Weighting?: Maybe<number>;
}

export interface UpdateJobTasks {
  Completed?: Maybe<boolean>;

  Description?: Maybe<string>;

  JobId?: Maybe<string>;

  Name?: Maybe<string>;

  Seq?: Maybe<number>;

  UID: string;
}

export interface UpdateJobTimeConstraints {
  EndBefore?: Maybe<string>;

  JobId?: Maybe<string>;

  Required?: Maybe<boolean>;

  StartAfter?: Maybe<string>;

  StartBefore?: Maybe<string>;

  Type?: Maybe<JobTimeConstraintType>;

  UID: string;
}

export interface UpdateJobs {
  AbortReason?: Maybe<string>;

  AccountId?: Maybe<string>;

  ActualEnd?: Maybe<string>;

  ActualStart?: Maybe<string>;

  Address?: Maybe<string>;

  AutoSchedule?: Maybe<boolean>;

  CanBeDeclined?: Maybe<boolean>;

  CompletionNotes?: Maybe<string>;

  ContactId?: Maybe<string>;

  CopiedFromId?: Maybe<string>;

  CustomerConfirmationStatus?: Maybe<CustomerConfirmationStatus>;

  Description?: Maybe<string>;

  Duration?: Maybe<number>;

  End?: Maybe<string>;

  EstimatedEnd?: Maybe<string>;

  EstimatedStart?: Maybe<string>;

  FollowupReason?: Maybe<string>;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  IsGroupEvent?: Maybe<boolean>;

  JobAllocationTimeSource?: Maybe<boolean>;

  JobStatus?: Maybe<JobStatus>;

  LocationId?: Maybe<string>;

  Locked?: Maybe<boolean>;

  MaxAttendees?: Maybe<number>;

  MinAttendees?: Maybe<number>;

  ModuleId?: Maybe<number>;

  Name?: Maybe<string>;

  NotesComments?: Maybe<string>;

  NotifyBy?: Maybe<string>;

  NotifyPeriod?: Maybe<number>;

  ParentId?: Maybe<string>;

  Quantity?: Maybe<number>;

  RecurringScheduleId?: Maybe<string>;

  RegionId?: Maybe<string>;

  ScheduleTemplateId?: Maybe<string>;

  Start?: Maybe<string>;

  TemplatedJobId?: Maybe<string>;

  Type?: Maybe<string>;

  UID: string;

  Urgency?: Maybe<string>;

  VirtualMeetingId?: Maybe<string>;

  VirtualMeetingInfo?: Maybe<string>;

  VirtualMeetingURL?: Maybe<string>;
}

export interface UpdateLocationResourceScores {
  Blacklisted?: Maybe<boolean>;

  LocationId?: Maybe<string>;

  ResourceId?: Maybe<string>;

  UID: string;

  Whitelisted?: Maybe<boolean>;
}

export interface UpdateLocations {
  AccountId?: Maybe<string>;

  Address?: Maybe<string>;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  Name?: Maybe<string>;

  RegionId?: Maybe<string>;

  RequiresWhitelist?: Maybe<boolean>;

  Type?: Maybe<string>;

  UID: string;
}

export interface UpdateProducts {
  Description?: Maybe<string>;

  Family?: Maybe<string>;

  IsActive?: Maybe<boolean>;

  Name?: Maybe<string>;

  ProductCode?: Maybe<string>;

  UID: string;
}

export interface UpdateRecurringSchedules {
  AckAllJobs?: Maybe<boolean>;

  Description?: Maybe<string>;

  Pattern?: Maybe<string>;

  Summary?: Maybe<string>;

  UID: string;
}

export interface UpdateRegions {
  CountryCode?: Maybe<string>;

  Description?: Maybe<string>;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  Name?: Maybe<string>;

  Radius?: Maybe<number>;

  Timezone?: Maybe<string>;

  UID: string;
}

export interface UpdateResourceJobOffers {
  JobOfferId?: Maybe<string>;

  ResourceId?: Maybe<string>;

  Response?: Maybe<OfferResponse>;

  Status?: Maybe<ResourceOfferStatus>;

  TimeNotified?: Maybe<string>;

  TimeResponded?: Maybe<string>;

  UID: string;
}

export interface UpdateResourceOverrideRegions {
  RegionId?: Maybe<string>;

  ResourceOverrideId?: Maybe<string>;

  UID: string;
}

export interface UpdateResourceOverrides {
  Description?: Maybe<string>;

  End?: Maybe<string>;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  HomeAddress?: Maybe<string>;

  ResourceId?: Maybe<string>;

  Start?: Maybe<string>;

  UID: string;
}

export interface UpdateResourceRegions {
  End?: Maybe<string>;

  RegionId?: Maybe<string>;

  ResourceId?: Maybe<string>;

  Start?: Maybe<string>;

  UID: string;
}

export interface UpdateResourceRequirementTags {
  Required?: Maybe<boolean>;

  ResourceRequirementId?: Maybe<string>;

  TagId?: Maybe<string>;

  UID: string;

  Weighting?: Maybe<number>;
}

export interface UpdateResourceRequirements {
  Description?: Maybe<string>;

  Duration?: Maybe<number>;

  JobAllocationTimeSource?: Maybe<boolean>;

  JobId?: Maybe<string>;

  Quantity?: Maybe<number>;

  RelativeStart?: Maybe<number>;

  ScheduledEnd?: Maybe<string>;

  ScheduledStart?: Maybe<string>;

  Status?: Maybe<JobStatus>;

  UID: string;
}

export interface UpdateResourceShiftBreaks {
  End?: Maybe<string>;

  ResourceShiftId?: Maybe<string>;

  Start?: Maybe<string>;

  UID: string;
}

export interface UpdateResourceShiftOffers {
  ResourceId?: Maybe<string>;

  Response?: Maybe<OfferResponse>;

  ShiftOfferId?: Maybe<string>;

  Status?: Maybe<ResourceOfferStatus>;

  TimeNotified?: Maybe<string>;

  TimeResponded?: Maybe<string>;

  UID: string;
}

export interface UpdateResourceShifts {
  ActualEnd?: Maybe<string>;

  ActualStart?: Maybe<string>;

  ResourceId?: Maybe<string>;

  ShiftId?: Maybe<string>;

  UID: string;
}

export interface UpdateResourceTags {
  ExpiryDate?: Maybe<string>;

  ResourceId?: Maybe<string>;

  TagId?: Maybe<string>;

  UID: string;
}

export interface UpdateResources {
  Alias?: Maybe<string>;

  AutoSchedule?: Maybe<boolean>;

  Category?: Maybe<string>;

  CountryCode?: Maybe<string>;

  Email?: Maybe<string>;

  EmploymentType?: Maybe<string>;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  HomeAddress?: Maybe<string>;

  IsActive?: Maybe<boolean>;

  MobilePhone?: Maybe<string>;

  Name?: Maybe<string>;

  Notes?: Maybe<string>;

  NotificationType?: Maybe<string>;

  PrimaryPhone?: Maybe<string>;

  PrimaryRegionId?: Maybe<string>;

  Rating?: Maybe<number>;

  ResourceType?: Maybe<string>;

  TeamId?: Maybe<number>;

  UID: string;

  UserId?: Maybe<string>;

  WeeklyHours?: Maybe<number>;

  WorkingHourType?: Maybe<WorkingHourType>;
}

export interface UpdateScheduleTemplates {
  DeletedById?: Maybe<string>;

  DeletedDate?: Maybe<string>;

  Description?: Maybe<string>;

  IsDeleted?: Maybe<boolean>;

  Name?: Maybe<string>;

  PeriodDays?: Maybe<number>;

  UID: string;
}

export interface UpdateShiftOfferShifts {
  ShiftId?: Maybe<string>;

  ShiftOfferId?: Maybe<string>;

  UID: string;
}

export interface UpdateShiftOffers {
  Status?: Maybe<OfferStatus>;

  UID: string;
}

export interface UpdateShiftTags {
  Required?: Maybe<boolean>;

  ShiftId?: Maybe<string>;

  TagId?: Maybe<string>;

  UID: string;

  Weighting?: Maybe<number>;
}

export interface UpdateShifts {
  CopiedFromId?: Maybe<string>;

  DisplayName?: Maybe<string>;

  Duration?: Maybe<number>;

  End?: Maybe<string>;

  IsDraft?: Maybe<boolean>;

  LocationId?: Maybe<string>;

  RegionId?: Maybe<string>;

  ScheduleTemplateId?: Maybe<string>;

  Start?: Maybe<string>;

  TemplatedShiftId?: Maybe<string>;

  UID: string;
}

export interface UpdateTags {
  Classification?: Maybe<TagClassification>;

  Name?: Maybe<string>;

  Type?: Maybe<string>;

  UID: string;
}

export interface UpdateTemplatedActivities {
  Address?: Maybe<string>;

  Duration?: Maybe<number>;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  LocationId?: Maybe<string>;

  Notes?: Maybe<string>;

  Quantity?: Maybe<number>;

  ResourceId?: Maybe<string>;

  ScheduleTemplateId?: Maybe<string>;

  StartOffsetDays?: Maybe<number>;

  StartTimeOfDay?: Maybe<LocalTime>;

  Timezone?: Maybe<string>;

  Type?: Maybe<string>;

  UID: string;
}

export interface UpdateTemplatedActivityResources {
  ResourceId?: Maybe<string>;

  TemplatedActivityId?: Maybe<string>;

  UID: string;
}

export interface UpdateTemplatedAttendees {
  ContactId?: Maybe<string>;

  TemplatedJobId?: Maybe<string>;

  UID: string;
}

export interface UpdateTemplatedJobAllocations {
  Duration?: Maybe<number>;

  NotificationType?: Maybe<string>;

  ResourceId?: Maybe<string>;

  StartOffsetDays?: Maybe<number>;

  StartTimeOfDay?: Maybe<LocalTime>;

  Status?: Maybe<JobAllocationStatus>;

  TeamLeader?: Maybe<boolean>;

  TemplatedJobId?: Maybe<string>;

  TemplatedResourceRequirementId?: Maybe<string>;

  UID: string;
}

export interface UpdateTemplatedJobDependencies {
  FromAnchor?: Maybe<JobDependencyAnchor>;

  FromTemplatedJobId?: Maybe<string>;

  ToAnchor?: Maybe<JobDependencyAnchor>;

  ToAnchorMaxOffsetMinutes?: Maybe<number>;

  ToAnchorMinOffsetMinutes?: Maybe<number>;

  ToTemplatedJobId?: Maybe<string>;

  UID: string;
}

export interface UpdateTemplatedJobProducts {
  ProductId?: Maybe<string>;

  Qty?: Maybe<number>;

  TemplatedJobId?: Maybe<string>;

  UID: string;
}

export interface UpdateTemplatedJobTags {
  Required?: Maybe<boolean>;

  TagId?: Maybe<string>;

  TemplatedJobId?: Maybe<string>;

  UID: string;

  Weighting?: Maybe<number>;
}

export interface UpdateTemplatedJobTasks {
  Completed?: Maybe<boolean>;

  Description?: Maybe<string>;

  Name?: Maybe<string>;

  Seq?: Maybe<number>;

  TemplatedJobId?: Maybe<string>;

  UID: string;
}

export interface UpdateTemplatedJobTimeConstraints {
  EndBeforeOffsetDays?: Maybe<number>;

  EndBeforeTimeOfDay?: Maybe<LocalTime>;

  Required?: Maybe<boolean>;

  StartAfterOffsetDays?: Maybe<number>;

  StartAfterTimeOfDay?: Maybe<LocalTime>;

  StartBeforeOffsetDays?: Maybe<number>;

  StartBeforeTimeOfDay?: Maybe<LocalTime>;

  TemplatedJobId?: Maybe<string>;

  Type?: Maybe<JobTimeConstraintType>;

  UID: string;
}

export interface UpdateTemplatedJobs {
  AccountId?: Maybe<string>;

  Address?: Maybe<string>;

  AutoSchedule?: Maybe<boolean>;

  CanBeDeclined?: Maybe<boolean>;

  ContactId?: Maybe<string>;

  CustomerConfirmationStatus?: Maybe<CustomerConfirmationStatus>;

  Description?: Maybe<string>;

  Duration?: Maybe<number>;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  IsGroupEvent?: Maybe<boolean>;

  JobAllocationTimeSource?: Maybe<boolean>;

  LocationId?: Maybe<string>;

  Locked?: Maybe<boolean>;

  MaxAttendees?: Maybe<number>;

  MinAttendees?: Maybe<number>;

  NotesComments?: Maybe<string>;

  NotifyPeriod?: Maybe<number>;

  Quantity?: Maybe<number>;

  RegionId?: Maybe<string>;

  ScheduleTemplateId?: Maybe<string>;

  StartOffsetDays?: Maybe<number>;

  StartTimeOfDay?: Maybe<LocalTime>;

  Type?: Maybe<string>;

  UID: string;

  Urgency?: Maybe<string>;

  VirtualMeetingId?: Maybe<string>;

  VirtualMeetingInfo?: Maybe<string>;

  VirtualMeetingURL?: Maybe<string>;
}

export interface UpdateTemplatedResourceRequirementTags {
  Required?: Maybe<boolean>;

  TagId?: Maybe<string>;

  TemplatedResourceRequirementId?: Maybe<string>;

  UID: string;

  Weighting?: Maybe<number>;
}

export interface UpdateTemplatedResourceRequirements {
  Description?: Maybe<string>;

  JobAllocationTimeSource?: Maybe<boolean>;

  Quantity?: Maybe<number>;

  RelativeStart?: Maybe<number>;

  TemplatedJobId?: Maybe<string>;

  UID: string;
}

export interface UpdateTemplatedResourceShifts {
  ResourceId?: Maybe<string>;

  TemplatedShiftId?: Maybe<string>;

  UID: string;
}

export interface UpdateTemplatedShiftTags {
  Required?: Maybe<boolean>;

  TagId?: Maybe<string>;

  TemplatedShiftId?: Maybe<string>;

  UID: string;

  Weighting?: Maybe<number>;
}

export interface UpdateTemplatedShifts {
  DisplayName?: Maybe<string>;

  Duration?: Maybe<number>;

  IsDraft?: Maybe<boolean>;

  LocationId?: Maybe<string>;

  RegionId?: Maybe<string>;

  ScheduleTemplateId?: Maybe<string>;

  StartOffsetDays?: Maybe<number>;

  StartTimeOfDay?: Maybe<LocalTime>;

  UID: string;
}

export interface UpdateUserRegions {
  RegionId?: Maybe<string>;

  UID: string;

  UserId?: Maybe<string>;
}

export interface UpsertAccountResourceScores {
  AccountId: string;

  Blacklisted?: Maybe<boolean>;

  ResourceId: string;

  UID?: Maybe<string>;

  Whitelisted?: Maybe<boolean>;
}

export interface UpsertAccountTags {
  AccountId: string;

  Required?: Maybe<boolean>;

  TagId: string;

  UID?: Maybe<string>;

  Weighting?: Maybe<number>;
}

export interface UpsertAccounts {
  BillingCity?: Maybe<string>;

  BillingPostalCode?: Maybe<string>;

  BillingState?: Maybe<string>;

  BillingStreet?: Maybe<string>;

  Fax?: Maybe<string>;

  Name: string;

  Phone?: Maybe<string>;

  Rank?: Maybe<number>;

  RequiresWhitelist?: Maybe<boolean>;

  ShippingCity?: Maybe<string>;

  ShippingPostalCode?: Maybe<string>;

  ShippingState?: Maybe<string>;

  ShippingStreet?: Maybe<string>;

  UID?: Maybe<string>;
}

export interface UpsertActivities {
  Address?: Maybe<string>;

  CopiedFromId?: Maybe<string>;

  End: string;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  LocationId?: Maybe<string>;

  Notes?: Maybe<string>;

  Quantity?: Maybe<number>;

  ResourceId?: Maybe<string>;

  ScheduleTemplateId?: Maybe<string>;

  Start: string;

  TemplatedActivityId?: Maybe<string>;

  Timezone?: Maybe<string>;

  Type?: Maybe<string>;

  UID?: Maybe<string>;
}

export interface UpsertActivityResources {
  ActivityId: string;

  ResourceId: string;

  UID?: Maybe<string>;
}

export interface UpsertAttendees {
  CancelReason?: Maybe<string>;

  ContactId: string;

  JobId: string;

  Status?: Maybe<AttendeeStatus>;

  TimeCancelled?: Maybe<string>;

  UID?: Maybe<string>;
}

export interface UpsertAvailabilities {
  Finish: string;

  IsAvailable?: Maybe<boolean>;

  Notes?: Maybe<string>;

  ResourceId: string;

  Start: string;

  Status?: Maybe<AvailabilityStatus>;

  Type?: Maybe<string>;

  UID?: Maybe<string>;
}

export interface UpsertAvailabilityPatternResources {
  AvailabilityPatternId: string;

  End?: Maybe<string>;

  ResourceId: string;

  Start: string;

  Status?: Maybe<AvailabilityStatus>;

  UID?: Maybe<string>;
}

export interface UpsertAvailabilityPatterns {
  Description?: Maybe<string>;

  Hash: string;

  Name: string;

  Pattern: string;

  UID?: Maybe<string>;
}

export interface UpsertAvailabilityTemplateEntries {
  AvailabilityTemplateId: string;

  FinishTime: number;

  IsAvailable?: Maybe<boolean>;

  StartTime: number;

  UID?: Maybe<string>;

  Weekday: Weekday;
}

export interface UpsertAvailabilityTemplateResources {
  AvailabilityTemplateId: string;

  Migrated?: Maybe<boolean>;

  ResourceId: string;

  UID?: Maybe<string>;
}

export interface UpsertAvailabilityTemplates {
  AvailabilityPatternId?: Maybe<string>;

  Finish?: Maybe<LocalDate>;

  Global?: Maybe<boolean>;

  Name?: Maybe<string>;

  Start?: Maybe<LocalDate>;

  UID?: Maybe<string>;
}

export interface UpsertClientAvailabilities {
  AccountId?: Maybe<string>;

  ContactId?: Maybe<string>;

  End: string;

  IsAvailable?: Maybe<boolean>;

  PreferredEnd?: Maybe<string>;

  PreferredStart?: Maybe<string>;

  RecurringScheduleId?: Maybe<string>;

  Start: string;

  UID?: Maybe<string>;
}

export interface UpsertContactTags {
  ContactId: string;

  Required?: Maybe<boolean>;

  TagId: string;

  UID?: Maybe<string>;

  Weighting?: Maybe<number>;
}

export interface UpsertContacts {
  AccountId?: Maybe<string>;

  Email?: Maybe<string>;

  FirstName?: Maybe<string>;

  LastName: string;

  MailingCity?: Maybe<string>;

  MailingPostalCode?: Maybe<string>;

  MailingState?: Maybe<string>;

  MailingStreet?: Maybe<string>;

  MobilePhone?: Maybe<string>;

  OtherCity?: Maybe<string>;

  OtherPostalCode?: Maybe<string>;

  OtherState?: Maybe<string>;

  OtherStreet?: Maybe<string>;

  Phone?: Maybe<string>;

  RegionId?: Maybe<string>;

  Title?: Maybe<string>;

  UID?: Maybe<string>;
}

export interface UpsertEduMeSettings {
  ApiKey?: Maybe<string>;

  Name?: Maybe<string>;

  UID?: Maybe<string>;
}

export interface UpsertErrorLogs {
  Log?: Maybe<string>;

  Name?: Maybe<string>;

  Payload?: Maybe<string>;

  UID?: Maybe<string>;
}

export interface UpsertHolidayRegions {
  HolidayId: string;

  RegionId: string;

  UID?: Maybe<string>;
}

export interface UpsertHolidays {
  EndDate: LocalDate;

  Global?: Maybe<boolean>;

  Name: string;

  StartDate: LocalDate;

  UID?: Maybe<string>;
}

export interface UpsertJobAllocations {
  DeclineDescription?: Maybe<string>;

  DeclineReason?: Maybe<string>;

  Duration?: Maybe<number>;

  End?: Maybe<string>;

  EstimatedTravelDistance?: Maybe<number>;

  EstimatedTravelTime?: Maybe<number>;

  GeoCheckedInLatitude?: Maybe<number>;

  GeoCheckedInLongitude?: Maybe<number>;

  GeoCompletedLatitude?: Maybe<number>;

  GeoCompletedLongitude?: Maybe<number>;

  GeoInProgressLatitude?: Maybe<number>;

  GeoInProgressLongitude?: Maybe<number>;

  GeoStartTravelLatitude?: Maybe<number>;

  GeoStartTravelLongitude?: Maybe<number>;

  JobId: string;

  NotificationType?: Maybe<string>;

  PhoneResponse?: Maybe<string>;

  ResourceId: string;

  ResourceRequirementId?: Maybe<string>;

  Start?: Maybe<string>;

  Status?: Maybe<JobAllocationStatus>;

  TeamLeader?: Maybe<boolean>;

  TimeCheckedIn?: Maybe<string>;

  TimeCompleted?: Maybe<string>;

  TimeInProgress?: Maybe<string>;

  TimePublished?: Maybe<string>;

  TimeResponded?: Maybe<string>;

  TimeStartTravel?: Maybe<string>;

  TravelDistance?: Maybe<number>;

  TravelTime?: Maybe<number>;

  UID?: Maybe<string>;
}

export interface UpsertJobDependencies {
  FromAnchor?: Maybe<JobDependencyAnchor>;

  FromJobId: string;

  ToAnchor?: Maybe<JobDependencyAnchor>;

  ToAnchorMaxOffsetMinutes?: Maybe<number>;

  ToAnchorMinOffsetMinutes?: Maybe<number>;

  ToJobId: string;

  UID?: Maybe<string>;
}

export interface UpsertJobOffers {
  CreatedByResource?: Maybe<boolean>;

  JobId: string;

  ResourceRequirementId?: Maybe<string>;

  Status?: Maybe<OfferStatus>;

  UID?: Maybe<string>;
}

export interface UpsertJobProducts {
  JobId: string;

  ProductId?: Maybe<string>;

  Qty: number;

  UID?: Maybe<string>;
}

export interface UpsertJobTags {
  JobId: string;

  Required?: Maybe<boolean>;

  TagId: string;

  UID?: Maybe<string>;

  Weighting?: Maybe<number>;
}

export interface UpsertJobTasks {
  Completed?: Maybe<boolean>;

  Description?: Maybe<string>;

  JobId: string;

  Name: string;

  Seq: number;

  UID?: Maybe<string>;
}

export interface UpsertJobTimeConstraints {
  EndBefore?: Maybe<string>;

  JobId: string;

  Required?: Maybe<boolean>;

  StartAfter?: Maybe<string>;

  StartBefore?: Maybe<string>;

  Type?: Maybe<JobTimeConstraintType>;

  UID?: Maybe<string>;
}

export interface UpsertJobs {
  AbortReason?: Maybe<string>;

  AccountId?: Maybe<string>;

  ActualEnd?: Maybe<string>;

  ActualStart?: Maybe<string>;

  Address?: Maybe<string>;

  AutoSchedule?: Maybe<boolean>;

  CanBeDeclined?: Maybe<boolean>;

  CompletionNotes?: Maybe<string>;

  ContactId?: Maybe<string>;

  CopiedFromId?: Maybe<string>;

  CustomerConfirmationStatus?: Maybe<CustomerConfirmationStatus>;

  Description?: Maybe<string>;

  Duration: number;

  End?: Maybe<string>;

  EstimatedEnd?: Maybe<string>;

  EstimatedStart?: Maybe<string>;

  FollowupReason?: Maybe<string>;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  IsGroupEvent?: Maybe<boolean>;

  JobAllocationTimeSource?: Maybe<boolean>;

  JobStatus?: Maybe<JobStatus>;

  LocationId?: Maybe<string>;

  Locked?: Maybe<boolean>;

  MaxAttendees?: Maybe<number>;

  MinAttendees?: Maybe<number>;

  ModuleId?: Maybe<number>;

  Name?: Maybe<string>;

  NotesComments?: Maybe<string>;

  NotifyBy?: Maybe<string>;

  NotifyPeriod?: Maybe<number>;

  ParentId?: Maybe<string>;

  Quantity?: Maybe<number>;

  RecurringScheduleId?: Maybe<string>;

  RegionId: string;

  ScheduleTemplateId?: Maybe<string>;

  Start?: Maybe<string>;

  TemplatedJobId?: Maybe<string>;

  Type?: Maybe<string>;

  UID?: Maybe<string>;

  Urgency?: Maybe<string>;

  VirtualMeetingId?: Maybe<string>;

  VirtualMeetingInfo?: Maybe<string>;

  VirtualMeetingURL?: Maybe<string>;
}

export interface UpsertLocationResourceScores {
  Blacklisted?: Maybe<boolean>;

  LocationId: string;

  ResourceId: string;

  UID?: Maybe<string>;

  Whitelisted?: Maybe<boolean>;
}

export interface UpsertLocations {
  AccountId?: Maybe<string>;

  Address?: Maybe<string>;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  Name: string;

  RegionId?: Maybe<string>;

  RequiresWhitelist?: Maybe<boolean>;

  Type?: Maybe<string>;

  UID?: Maybe<string>;
}

export interface UpsertProducts {
  Description?: Maybe<string>;

  Family?: Maybe<string>;

  IsActive?: Maybe<boolean>;

  Name: string;

  ProductCode?: Maybe<string>;

  UID?: Maybe<string>;
}

export interface UpsertRecurringSchedules {
  AckAllJobs?: Maybe<boolean>;

  Description?: Maybe<string>;

  Pattern?: Maybe<string>;

  Summary?: Maybe<string>;

  UID?: Maybe<string>;
}

export interface UpsertRegions {
  CountryCode?: Maybe<string>;

  Description?: Maybe<string>;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  Name: string;

  Radius?: Maybe<number>;

  Timezone: string;

  UID?: Maybe<string>;
}

export interface UpsertResourceJobOffers {
  JobOfferId: string;

  ResourceId: string;

  Response?: Maybe<OfferResponse>;

  Status?: Maybe<ResourceOfferStatus>;

  TimeNotified?: Maybe<string>;

  TimeResponded?: Maybe<string>;

  UID?: Maybe<string>;
}

export interface UpsertResourceOverrideRegions {
  RegionId: string;

  ResourceOverrideId: string;

  UID?: Maybe<string>;
}

export interface UpsertResourceOverrides {
  Description?: Maybe<string>;

  End: string;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  HomeAddress?: Maybe<string>;

  ResourceId: string;

  Start: string;

  UID?: Maybe<string>;
}

export interface UpsertResourceRegions {
  End?: Maybe<string>;

  RegionId: string;

  ResourceId: string;

  Start?: Maybe<string>;

  UID?: Maybe<string>;
}

export interface UpsertResourceRequirementTags {
  Required?: Maybe<boolean>;

  ResourceRequirementId: string;

  TagId: string;

  UID?: Maybe<string>;

  Weighting?: Maybe<number>;
}

export interface UpsertResourceRequirements {
  Description?: Maybe<string>;

  Duration?: Maybe<number>;

  JobAllocationTimeSource?: Maybe<boolean>;

  JobId: string;

  Quantity: number;

  RelativeStart?: Maybe<number>;

  ScheduledEnd?: Maybe<string>;

  ScheduledStart?: Maybe<string>;

  Status?: Maybe<JobStatus>;

  UID?: Maybe<string>;
}

export interface UpsertResourceShiftBreaks {
  End?: Maybe<string>;

  ResourceShiftId: string;

  Start: string;

  UID?: Maybe<string>;
}

export interface UpsertResourceShiftOffers {
  ResourceId: string;

  Response?: Maybe<OfferResponse>;

  ShiftOfferId: string;

  Status?: Maybe<ResourceOfferStatus>;

  TimeNotified?: Maybe<string>;

  TimeResponded?: Maybe<string>;

  UID?: Maybe<string>;
}

export interface UpsertResourceShifts {
  ActualEnd?: Maybe<string>;

  ActualStart?: Maybe<string>;

  ResourceId: string;

  ShiftId: string;

  UID?: Maybe<string>;
}

export interface UpsertResourceTags {
  ExpiryDate?: Maybe<string>;

  ResourceId: string;

  TagId: string;

  UID?: Maybe<string>;
}

export interface UpsertResources {
  Alias?: Maybe<string>;

  AutoSchedule?: Maybe<boolean>;

  Category?: Maybe<string>;

  CountryCode?: Maybe<string>;

  Email?: Maybe<string>;

  EmploymentType?: Maybe<string>;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  HomeAddress?: Maybe<string>;

  IsActive?: Maybe<boolean>;

  MobilePhone?: Maybe<string>;

  Name: string;

  Notes?: Maybe<string>;

  NotificationType?: Maybe<string>;

  PrimaryPhone?: Maybe<string>;

  PrimaryRegionId: string;

  Rating?: Maybe<number>;

  ResourceType?: Maybe<string>;

  TeamId?: Maybe<number>;

  UID?: Maybe<string>;

  UserId?: Maybe<string>;

  WeeklyHours?: Maybe<number>;

  WorkingHourType?: Maybe<WorkingHourType>;
}

export interface UpsertScheduleTemplates {
  DeletedById?: Maybe<string>;

  DeletedDate?: Maybe<string>;

  Description?: Maybe<string>;

  IsDeleted?: Maybe<boolean>;

  Name: string;

  PeriodDays?: Maybe<number>;

  UID?: Maybe<string>;
}

export interface UpsertShiftOfferShifts {
  ShiftId: string;

  ShiftOfferId: string;

  UID?: Maybe<string>;
}

export interface UpsertShiftOffers {
  Status?: Maybe<OfferStatus>;

  UID?: Maybe<string>;
}

export interface UpsertShiftTags {
  Required?: Maybe<boolean>;

  ShiftId: string;

  TagId: string;

  UID?: Maybe<string>;

  Weighting?: Maybe<number>;
}

export interface UpsertShifts {
  CopiedFromId?: Maybe<string>;

  DisplayName?: Maybe<string>;

  Duration?: Maybe<number>;

  End?: Maybe<string>;

  IsDraft?: Maybe<boolean>;

  LocationId?: Maybe<string>;

  RegionId?: Maybe<string>;

  ScheduleTemplateId?: Maybe<string>;

  Start?: Maybe<string>;

  TemplatedShiftId?: Maybe<string>;

  UID?: Maybe<string>;
}

export interface UpsertTags {
  Classification?: Maybe<TagClassification>;

  Name: string;

  Type?: Maybe<string>;

  UID?: Maybe<string>;
}

export interface UpsertTemplatedActivities {
  Address?: Maybe<string>;

  Duration: number;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  LocationId?: Maybe<string>;

  Notes?: Maybe<string>;

  Quantity?: Maybe<number>;

  ResourceId?: Maybe<string>;

  ScheduleTemplateId: string;

  StartOffsetDays: number;

  StartTimeOfDay: LocalTime;

  Timezone: string;

  Type?: Maybe<string>;

  UID?: Maybe<string>;
}

export interface UpsertTemplatedActivityResources {
  ResourceId: string;

  TemplatedActivityId: string;

  UID?: Maybe<string>;
}

export interface UpsertTemplatedAttendees {
  ContactId: string;

  TemplatedJobId: string;

  UID?: Maybe<string>;
}

export interface UpsertTemplatedJobAllocations {
  Duration?: Maybe<number>;

  NotificationType?: Maybe<string>;

  ResourceId: string;

  StartOffsetDays?: Maybe<number>;

  StartTimeOfDay?: Maybe<LocalTime>;

  Status?: Maybe<JobAllocationStatus>;

  TeamLeader?: Maybe<boolean>;

  TemplatedJobId: string;

  TemplatedResourceRequirementId?: Maybe<string>;

  UID?: Maybe<string>;
}

export interface UpsertTemplatedJobDependencies {
  FromAnchor?: Maybe<JobDependencyAnchor>;

  FromTemplatedJobId: string;

  ToAnchor?: Maybe<JobDependencyAnchor>;

  ToAnchorMaxOffsetMinutes?: Maybe<number>;

  ToAnchorMinOffsetMinutes?: Maybe<number>;

  ToTemplatedJobId: string;

  UID?: Maybe<string>;
}

export interface UpsertTemplatedJobProducts {
  ProductId?: Maybe<string>;

  Qty: number;

  TemplatedJobId: string;

  UID?: Maybe<string>;
}

export interface UpsertTemplatedJobTags {
  Required?: Maybe<boolean>;

  TagId: string;

  TemplatedJobId: string;

  UID?: Maybe<string>;

  Weighting?: Maybe<number>;
}

export interface UpsertTemplatedJobTasks {
  Completed?: Maybe<boolean>;

  Description?: Maybe<string>;

  Name: string;

  Seq: number;

  TemplatedJobId: string;

  UID?: Maybe<string>;
}

export interface UpsertTemplatedJobTimeConstraints {
  EndBeforeOffsetDays?: Maybe<number>;

  EndBeforeTimeOfDay?: Maybe<LocalTime>;

  Required?: Maybe<boolean>;

  StartAfterOffsetDays?: Maybe<number>;

  StartAfterTimeOfDay?: Maybe<LocalTime>;

  StartBeforeOffsetDays?: Maybe<number>;

  StartBeforeTimeOfDay?: Maybe<LocalTime>;

  TemplatedJobId: string;

  Type: JobTimeConstraintType;

  UID?: Maybe<string>;
}

export interface UpsertTemplatedJobs {
  AccountId?: Maybe<string>;

  Address?: Maybe<string>;

  AutoSchedule?: Maybe<boolean>;

  CanBeDeclined?: Maybe<boolean>;

  ContactId?: Maybe<string>;

  CustomerConfirmationStatus?: Maybe<CustomerConfirmationStatus>;

  Description?: Maybe<string>;

  Duration: number;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  IsGroupEvent?: Maybe<boolean>;

  JobAllocationTimeSource?: Maybe<boolean>;

  LocationId?: Maybe<string>;

  Locked?: Maybe<boolean>;

  MaxAttendees?: Maybe<number>;

  MinAttendees?: Maybe<number>;

  NotesComments?: Maybe<string>;

  NotifyPeriod?: Maybe<number>;

  Quantity?: Maybe<number>;

  RegionId: string;

  ScheduleTemplateId: string;

  StartOffsetDays: number;

  StartTimeOfDay: LocalTime;

  Type?: Maybe<string>;

  UID?: Maybe<string>;

  Urgency?: Maybe<string>;

  VirtualMeetingId?: Maybe<string>;

  VirtualMeetingInfo?: Maybe<string>;

  VirtualMeetingURL?: Maybe<string>;
}

export interface UpsertTemplatedResourceRequirementTags {
  Required?: Maybe<boolean>;

  TagId: string;

  TemplatedResourceRequirementId: string;

  UID?: Maybe<string>;

  Weighting?: Maybe<number>;
}

export interface UpsertTemplatedResourceRequirements {
  Description?: Maybe<string>;

  JobAllocationTimeSource?: Maybe<boolean>;

  Quantity: number;

  RelativeStart?: Maybe<number>;

  TemplatedJobId: string;

  UID?: Maybe<string>;
}

export interface UpsertTemplatedResourceShifts {
  ResourceId: string;

  TemplatedShiftId: string;

  UID?: Maybe<string>;
}

export interface UpsertTemplatedShiftTags {
  Required?: Maybe<boolean>;

  TagId: string;

  TemplatedShiftId: string;

  UID?: Maybe<string>;

  Weighting?: Maybe<number>;
}

export interface UpsertTemplatedShifts {
  DisplayName?: Maybe<string>;

  Duration: number;

  IsDraft?: Maybe<boolean>;

  LocationId?: Maybe<string>;

  RegionId: string;

  ScheduleTemplateId: string;

  StartOffsetDays: number;

  StartTimeOfDay: LocalTime;

  UID?: Maybe<string>;
}

export interface UpsertUserRegions {
  RegionId: string;

  UID?: Maybe<string>;

  UserId: string;
}

export enum SchemaSubscriptionOp {
  Insert = "INSERT",
  Update = "UPDATE",
  Delete = "DELETE"
}

/** A base64 encoded string */
export type Base64 = string;

/** EQL query filter for object type AccountResourceScores */
export type EqlQueryFilterAccountResourceScores = any;

/** A positive integer less than or equal to 200 */
export type PositiveIntMax200 = number;

/** A non-negative integer */
export type NonNegativeInt = number;

/** EQL order by clause for object type AccountResourceScores */
export type EqlOrderByClauseAccountResourceScores = any;

/** EQL query filter for object type ClientAvailabilities */
export type EqlQueryFilterClientAvailabilities = any;

/** EQL order by clause for object type ClientAvailabilities */
export type EqlOrderByClauseClientAvailabilities = any;

/** An instantaneous point on the time-line */
export type Instant = string;

/** EQL query filter for object type Resources */
export type EqlQueryFilterResources = any;

/** EQL order by clause for object type Resources */
export type EqlOrderByClauseResources = any;

/** EQL query filter for object type Activities */
export type EqlQueryFilterActivities = any;

/** EQL order by clause for object type Activities */
export type EqlOrderByClauseActivities = any;

/** EQL query filter for object type ActivityResources */
export type EqlQueryFilterActivityResources = any;

/** EQL order by clause for object type ActivityResources */
export type EqlOrderByClauseActivityResources = any;

/** The `BigDecimal` scalar type represents signed fractional values with arbitrary precision. */
export type BigDecimal = number;

/** EQL query filter for object type Jobs */
export type EqlQueryFilterJobs = any;

/** EQL order by clause for object type Jobs */
export type EqlOrderByClauseJobs = any;

/** EQL query filter for object type Attendees */
export type EqlQueryFilterAttendees = any;

/** EQL order by clause for object type Attendees */
export type EqlOrderByClauseAttendees = any;

/** Valid values are (Attended, Absent, Cancelled) */
export type AttendeeStatus = any;

/** Valid values are (Pending, Confirmed, Declined, Error) */
export type CustomerConfirmationStatus = any;

/** The duration in minutes between two instants in time */
export type Duration = number;

/** EQL query filter for object type JobAllocations */
export type EqlQueryFilterJobAllocations = any;

/** EQL order by clause for object type JobAllocations */
export type EqlOrderByClauseJobAllocations = any;

/** Valid values are (Queued, Pending Allocation, Pending Dispatch, Dispatched, Ready, En Route, On Site, In Progress, Complete, Cancelled) */
export type JobStatus = any;

/** EQL query filter for object type ResourceRequirementTags */
export type EqlQueryFilterResourceRequirementTags = any;

/** EQL order by clause for object type ResourceRequirementTags */
export type EqlOrderByClauseResourceRequirementTags = any;

/** Valid values are (Global, Human, Asset) */
export type TagClassification = any;

/** Valid values are (Pending Dispatch, Dispatched, Confirmed, En Route, Checked In, In Progress, Complete, Deleted, Declined) */
export type JobAllocationStatus = any;

/** EQL query filter for object type JobDependencies */
export type EqlQueryFilterJobDependencies = any;

/** EQL order by clause for object type JobDependencies */
export type EqlOrderByClauseJobDependencies = any;

/** Valid values are (Start, End) */
export type JobDependencyAnchor = any;

/** EQL query filter for object type JobOffers */
export type EqlQueryFilterJobOffers = any;

/** EQL order by clause for object type JobOffers */
export type EqlOrderByClauseJobOffers = any;

/** EQL query filter for object type ResourceJobOffers */
export type EqlQueryFilterResourceJobOffers = any;

/** EQL order by clause for object type ResourceJobOffers */
export type EqlOrderByClauseResourceJobOffers = any;

/** Valid values are (Accept, Decline) */
export type OfferResponse = any;

/** Valid values are (Pending, Declined, OfferFilled, OfferCancelled, ResourceOfferCancelled) */
export type ResourceOfferStatus = any;

/** Valid values are (Pending, Filled, Cancelled) */
export type OfferStatus = any;

/** EQL query filter for object type JobProducts */
export type EqlQueryFilterJobProducts = any;

/** EQL order by clause for object type JobProducts */
export type EqlOrderByClauseJobProducts = any;

/** EQL query filter for object type JobTags */
export type EqlQueryFilterJobTags = any;

/** EQL order by clause for object type JobTags */
export type EqlOrderByClauseJobTags = any;

/** EQL query filter for object type JobTasks */
export type EqlQueryFilterJobTasks = any;

/** EQL order by clause for object type JobTasks */
export type EqlOrderByClauseJobTasks = any;

/** EQL query filter for object type JobTimeConstraints */
export type EqlQueryFilterJobTimeConstraints = any;

/** EQL order by clause for object type JobTimeConstraints */
export type EqlOrderByClauseJobTimeConstraints = any;

/** Valid values are (SLA, Timeslot) */
export type JobTimeConstraintType = any;

/** EQL query filter for object type UserRegions */
export type EqlQueryFilterUserRegions = any;

/** EQL order by clause for object type UserRegions */
export type EqlOrderByClauseUserRegions = any;

/** EQL query filter for object type ResourceRequirements */
export type EqlQueryFilterResourceRequirements = any;

/** EQL order by clause for object type ResourceRequirements */
export type EqlOrderByClauseResourceRequirements = any;

/** EQL query filter for object type Shifts */
export type EqlQueryFilterShifts = any;

/** EQL order by clause for object type Shifts */
export type EqlOrderByClauseShifts = any;

/** EQL query filter for object type ResourceShifts */
export type EqlQueryFilterResourceShifts = any;

/** EQL order by clause for object type ResourceShifts */
export type EqlOrderByClauseResourceShifts = any;

/** EQL query filter for object type ResourceShiftBreaks */
export type EqlQueryFilterResourceShiftBreaks = any;

/** EQL order by clause for object type ResourceShiftBreaks */
export type EqlOrderByClauseResourceShiftBreaks = any;

/** EQL query filter for object type ShiftOfferShifts */
export type EqlQueryFilterShiftOfferShifts = any;

/** EQL order by clause for object type ShiftOfferShifts */
export type EqlOrderByClauseShiftOfferShifts = any;

/** EQL query filter for object type ResourceShiftOffers */
export type EqlQueryFilterResourceShiftOffers = any;

/** EQL order by clause for object type ResourceShiftOffers */
export type EqlOrderByClauseResourceShiftOffers = any;

/** EQL query filter for object type ShiftTags */
export type EqlQueryFilterShiftTags = any;

/** EQL order by clause for object type ShiftTags */
export type EqlOrderByClauseShiftTags = any;

/** A time without a time-zone in the ISO-8601 calendar system */
export type LocalTime = any;

/** EQL query filter for object type TemplatedResourceShifts */
export type EqlQueryFilterTemplatedResourceShifts = any;

/** EQL order by clause for object type TemplatedResourceShifts */
export type EqlOrderByClauseTemplatedResourceShifts = any;

/** EQL query filter for object type TemplatedShiftTags */
export type EqlQueryFilterTemplatedShiftTags = any;

/** EQL order by clause for object type TemplatedShiftTags */
export type EqlOrderByClauseTemplatedShiftTags = any;

/** EQL query filter for object type TemplatedActivities */
export type EqlQueryFilterTemplatedActivities = any;

/** EQL order by clause for object type TemplatedActivities */
export type EqlOrderByClauseTemplatedActivities = any;

/** EQL query filter for object type TemplatedActivityResources */
export type EqlQueryFilterTemplatedActivityResources = any;

/** EQL order by clause for object type TemplatedActivityResources */
export type EqlOrderByClauseTemplatedActivityResources = any;

/** EQL query filter for object type TemplatedJobs */
export type EqlQueryFilterTemplatedJobs = any;

/** EQL order by clause for object type TemplatedJobs */
export type EqlOrderByClauseTemplatedJobs = any;

/** EQL query filter for object type TemplatedAttendees */
export type EqlQueryFilterTemplatedAttendees = any;

/** EQL order by clause for object type TemplatedAttendees */
export type EqlOrderByClauseTemplatedAttendees = any;

/** EQL query filter for object type TemplatedJobAllocations */
export type EqlQueryFilterTemplatedJobAllocations = any;

/** EQL order by clause for object type TemplatedJobAllocations */
export type EqlOrderByClauseTemplatedJobAllocations = any;

/** EQL query filter for object type TemplatedResourceRequirementTags */
export type EqlQueryFilterTemplatedResourceRequirementTags = any;

/** EQL order by clause for object type TemplatedResourceRequirementTags */
export type EqlOrderByClauseTemplatedResourceRequirementTags = any;

/** EQL query filter for object type TemplatedJobDependencies */
export type EqlQueryFilterTemplatedJobDependencies = any;

/** EQL order by clause for object type TemplatedJobDependencies */
export type EqlOrderByClauseTemplatedJobDependencies = any;

/** EQL query filter for object type TemplatedJobProducts */
export type EqlQueryFilterTemplatedJobProducts = any;

/** EQL order by clause for object type TemplatedJobProducts */
export type EqlOrderByClauseTemplatedJobProducts = any;

/** EQL query filter for object type TemplatedJobTags */
export type EqlQueryFilterTemplatedJobTags = any;

/** EQL order by clause for object type TemplatedJobTags */
export type EqlOrderByClauseTemplatedJobTags = any;

/** EQL query filter for object type TemplatedJobTasks */
export type EqlQueryFilterTemplatedJobTasks = any;

/** EQL order by clause for object type TemplatedJobTasks */
export type EqlOrderByClauseTemplatedJobTasks = any;

/** EQL query filter for object type TemplatedJobTimeConstraints */
export type EqlQueryFilterTemplatedJobTimeConstraints = any;

/** EQL order by clause for object type TemplatedJobTimeConstraints */
export type EqlOrderByClauseTemplatedJobTimeConstraints = any;

/** EQL query filter for object type TemplatedResourceRequirements */
export type EqlQueryFilterTemplatedResourceRequirements = any;

/** EQL order by clause for object type TemplatedResourceRequirements */
export type EqlOrderByClauseTemplatedResourceRequirements = any;

/** EQL query filter for object type TemplatedShifts */
export type EqlQueryFilterTemplatedShifts = any;

/** EQL order by clause for object type TemplatedShifts */
export type EqlOrderByClauseTemplatedShifts = any;

/** EQL query filter for object type LocationResourceScores */
export type EqlQueryFilterLocationResourceScores = any;

/** EQL order by clause for object type LocationResourceScores */
export type EqlOrderByClauseLocationResourceScores = any;

/** EQL query filter for object type Availabilities */
export type EqlQueryFilterAvailabilities = any;

/** EQL order by clause for object type Availabilities */
export type EqlOrderByClauseAvailabilities = any;

/** Valid values are (Pending, Approved, Declined) */
export type AvailabilityStatus = any;

/** EQL query filter for object type AvailabilityPatternResources */
export type EqlQueryFilterAvailabilityPatternResources = any;

/** EQL order by clause for object type AvailabilityPatternResources */
export type EqlOrderByClauseAvailabilityPatternResources = any;

/** EQL query filter for object type ResourceOverrides */
export type EqlQueryFilterResourceOverrides = any;

/** EQL order by clause for object type ResourceOverrides */
export type EqlOrderByClauseResourceOverrides = any;

/** EQL query filter for object type ResourceOverrideRegions */
export type EqlQueryFilterResourceOverrideRegions = any;

/** EQL order by clause for object type ResourceOverrideRegions */
export type EqlOrderByClauseResourceOverrideRegions = any;

/** EQL query filter for object type ResourceRegions */
export type EqlQueryFilterResourceRegions = any;

/** EQL order by clause for object type ResourceRegions */
export type EqlOrderByClauseResourceRegions = any;

/** EQL query filter for object type ResourceTags */
export type EqlQueryFilterResourceTags = any;

/** EQL order by clause for object type ResourceTags */
export type EqlOrderByClauseResourceTags = any;

/** Valid values are (Shift, Availability) */
export type WorkingHourType = any;

/** EQL query filter for object type ContactTags */
export type EqlQueryFilterContactTags = any;

/** EQL order by clause for object type ContactTags */
export type EqlOrderByClauseContactTags = any;

/** EQL query filter for object type Contacts */
export type EqlQueryFilterContacts = any;

/** EQL order by clause for object type Contacts */
export type EqlOrderByClauseContacts = any;

/** EQL query filter for object type Locations */
export type EqlQueryFilterLocations = any;

/** EQL order by clause for object type Locations */
export type EqlOrderByClauseLocations = any;

/** EQL query filter for object type AccountTags */
export type EqlQueryFilterAccountTags = any;

/** EQL order by clause for object type AccountTags */
export type EqlOrderByClauseAccountTags = any;

/** EQL query filter for object type Accounts */
export type EqlQueryFilterAccounts = any;

/** EQL order by clause for object type Accounts */
export type EqlOrderByClauseAccounts = any;

/** EQL query filter for object type AvailabilityPatterns */
export type EqlQueryFilterAvailabilityPatterns = any;

/** EQL order by clause for object type AvailabilityPatterns */
export type EqlOrderByClauseAvailabilityPatterns = any;

/** EQL query filter for object type AvailabilityTemplateEntries */
export type EqlQueryFilterAvailabilityTemplateEntries = any;

/** EQL order by clause for object type AvailabilityTemplateEntries */
export type EqlOrderByClauseAvailabilityTemplateEntries = any;

/** A date without a time-zone in the ISO-8601 calendar system */
export type LocalDate = any;

/** EQL query filter for object type AvailabilityTemplateResources */
export type EqlQueryFilterAvailabilityTemplateResources = any;

/** EQL order by clause for object type AvailabilityTemplateResources */
export type EqlOrderByClauseAvailabilityTemplateResources = any;

/** Valid values are (MON, TUE, WED, THU, FRI, SAT, SUN) */
export type Weekday = any;

/** EQL query filter for object type AvailabilityTemplates */
export type EqlQueryFilterAvailabilityTemplates = any;

/** EQL order by clause for object type AvailabilityTemplates */
export type EqlOrderByClauseAvailabilityTemplates = any;

/** EQL query filter for object type EduMeSettings */
export type EqlQueryFilterEduMeSettings = any;

/** EQL order by clause for object type EduMeSettings */
export type EqlOrderByClauseEduMeSettings = any;

/** EQL query filter for object type ErrorLogs */
export type EqlQueryFilterErrorLogs = any;

/** EQL order by clause for object type ErrorLogs */
export type EqlOrderByClauseErrorLogs = any;

/** EQL query filter for object type HolidayRegions */
export type EqlQueryFilterHolidayRegions = any;

/** EQL order by clause for object type HolidayRegions */
export type EqlOrderByClauseHolidayRegions = any;

/** EQL query filter for object type Holidays */
export type EqlQueryFilterHolidays = any;

/** EQL order by clause for object type Holidays */
export type EqlOrderByClauseHolidays = any;

/** EQL query filter for object type Products */
export type EqlQueryFilterProducts = any;

/** EQL order by clause for object type Products */
export type EqlOrderByClauseProducts = any;

/** EQL query filter for object type RecurringSchedules */
export type EqlQueryFilterRecurringSchedules = any;

/** EQL order by clause for object type RecurringSchedules */
export type EqlOrderByClauseRecurringSchedules = any;

/** EQL query filter for object type Regions */
export type EqlQueryFilterRegions = any;

/** EQL order by clause for object type Regions */
export type EqlOrderByClauseRegions = any;

/** EQL query filter for object type ScheduleTemplates */
export type EqlQueryFilterScheduleTemplates = any;

/** EQL order by clause for object type ScheduleTemplates */
export type EqlOrderByClauseScheduleTemplates = any;

/** EQL query filter for object type ShiftOffers */
export type EqlQueryFilterShiftOffers = any;

/** EQL order by clause for object type ShiftOffers */
export type EqlOrderByClauseShiftOffers = any;

/** EQL query filter for object type Tags */
export type EqlQueryFilterTags = any;

/** EQL order by clause for object type Tags */
export type EqlOrderByClauseTags = any;

/** EQL query filter for object type Users */
export type EqlQueryFilterUsers = any;

/** EQL order by clause for object type Users */
export type EqlOrderByClauseUsers = any;

/** EQL record filter for object type JobProducts */
export type EqlRecordFilterJobProducts = any;

/** An EQL filter string, which can access the Current and Previous values of the JobProducts object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterJobProducts = any;

/** EQL record filter for object type TemplatedJobs */
export type EqlRecordFilterTemplatedJobs = any;

/** An EQL filter string, which can access the Current and Previous values of the TemplatedJobs object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterTemplatedJobs = any;

/** EQL record filter for object type Tags */
export type EqlRecordFilterTags = any;

/** An EQL filter string, which can access the Current and Previous values of the Tags object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterTags = any;

/** EQL record filter for object type UserRegions */
export type EqlRecordFilterUserRegions = any;

/** An EQL filter string, which can access the Current and Previous values of the UserRegions object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterUserRegions = any;

/** EQL record filter for object type ResourceShifts */
export type EqlRecordFilterResourceShifts = any;

/** An EQL filter string, which can access the Current and Previous values of the ResourceShifts object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterResourceShifts = any;

/** EQL record filter for object type TemplatedShifts */
export type EqlRecordFilterTemplatedShifts = any;

/** An EQL filter string, which can access the Current and Previous values of the TemplatedShifts object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterTemplatedShifts = any;

/** EQL record filter for object type JobAllocations */
export type EqlRecordFilterJobAllocations = any;

/** An EQL filter string, which can access the Current and Previous values of the JobAllocations object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterJobAllocations = any;

/** EQL record filter for object type ResourceOverrideRegions */
export type EqlRecordFilterResourceOverrideRegions = any;

/** An EQL filter string, which can access the Current and Previous values of the ResourceOverrideRegions object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterResourceOverrideRegions = any;

/** EQL record filter for object type Jobs */
export type EqlRecordFilterJobs = any;

/** An EQL filter string, which can access the Current and Previous values of the Jobs object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterJobs = any;

/** EQL record filter for object type ResourceOverrides */
export type EqlRecordFilterResourceOverrides = any;

/** An EQL filter string, which can access the Current and Previous values of the ResourceOverrides object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterResourceOverrides = any;

/** EQL record filter for object type EduMeSettings */
export type EqlRecordFilterEduMeSettings = any;

/** An EQL filter string, which can access the Current and Previous values of the EduMeSettings object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterEduMeSettings = any;

/** EQL record filter for object type ShiftOffers */
export type EqlRecordFilterShiftOffers = any;

/** An EQL filter string, which can access the Current and Previous values of the ShiftOffers object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterShiftOffers = any;

/** EQL record filter for object type RecurringSchedules */
export type EqlRecordFilterRecurringSchedules = any;

/** An EQL filter string, which can access the Current and Previous values of the RecurringSchedules object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterRecurringSchedules = any;

/** EQL record filter for object type JobTags */
export type EqlRecordFilterJobTags = any;

/** An EQL filter string, which can access the Current and Previous values of the JobTags object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterJobTags = any;

/** EQL record filter for object type Activities */
export type EqlRecordFilterActivities = any;

/** An EQL filter string, which can access the Current and Previous values of the Activities object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterActivities = any;

/** EQL record filter for object type TemplatedResourceRequirements */
export type EqlRecordFilterTemplatedResourceRequirements = any;

/** An EQL filter string, which can access the Current and Previous values of the TemplatedResourceRequirements object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterTemplatedResourceRequirements = any;

/** EQL record filter for object type TemplatedResourceRequirementTags */
export type EqlRecordFilterTemplatedResourceRequirementTags = any;

/** An EQL filter string, which can access the Current and Previous values of the TemplatedResourceRequirementTags object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterTemplatedResourceRequirementTags = any;

/** EQL record filter for object type AvailabilityTemplateResources */
export type EqlRecordFilterAvailabilityTemplateResources = any;

/** An EQL filter string, which can access the Current and Previous values of the AvailabilityTemplateResources object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterAvailabilityTemplateResources = any;

/** EQL record filter for object type ActivityResources */
export type EqlRecordFilterActivityResources = any;

/** An EQL filter string, which can access the Current and Previous values of the ActivityResources object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterActivityResources = any;

/** EQL record filter for object type ErrorLogs */
export type EqlRecordFilterErrorLogs = any;

/** An EQL filter string, which can access the Current and Previous values of the ErrorLogs object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterErrorLogs = any;

/** EQL record filter for object type ResourceTags */
export type EqlRecordFilterResourceTags = any;

/** An EQL filter string, which can access the Current and Previous values of the ResourceTags object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterResourceTags = any;

/** EQL record filter for object type TemplatedActivities */
export type EqlRecordFilterTemplatedActivities = any;

/** An EQL filter string, which can access the Current and Previous values of the TemplatedActivities object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterTemplatedActivities = any;

/** EQL record filter for object type JobTimeConstraints */
export type EqlRecordFilterJobTimeConstraints = any;

/** An EQL filter string, which can access the Current and Previous values of the JobTimeConstraints object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterJobTimeConstraints = any;

/** EQL record filter for object type JobOffers */
export type EqlRecordFilterJobOffers = any;

/** An EQL filter string, which can access the Current and Previous values of the JobOffers object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterJobOffers = any;

/** EQL record filter for object type Availabilities */
export type EqlRecordFilterAvailabilities = any;

/** An EQL filter string, which can access the Current and Previous values of the Availabilities object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterAvailabilities = any;

/** EQL record filter for object type ContactTags */
export type EqlRecordFilterContactTags = any;

/** An EQL filter string, which can access the Current and Previous values of the ContactTags object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterContactTags = any;

/** EQL record filter for object type ClientAvailabilities */
export type EqlRecordFilterClientAvailabilities = any;

/** An EQL filter string, which can access the Current and Previous values of the ClientAvailabilities object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterClientAvailabilities = any;

/** EQL record filter for object type TemplatedJobAllocations */
export type EqlRecordFilterTemplatedJobAllocations = any;

/** An EQL filter string, which can access the Current and Previous values of the TemplatedJobAllocations object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterTemplatedJobAllocations = any;

/** EQL record filter for object type Attendees */
export type EqlRecordFilterAttendees = any;

/** An EQL filter string, which can access the Current and Previous values of the Attendees object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterAttendees = any;

/** EQL record filter for object type ResourceRequirementTags */
export type EqlRecordFilterResourceRequirementTags = any;

/** An EQL filter string, which can access the Current and Previous values of the ResourceRequirementTags object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterResourceRequirementTags = any;

/** EQL record filter for object type Shifts */
export type EqlRecordFilterShifts = any;

/** An EQL filter string, which can access the Current and Previous values of the Shifts object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterShifts = any;

/** EQL record filter for object type TemplatedActivityResources */
export type EqlRecordFilterTemplatedActivityResources = any;

/** An EQL filter string, which can access the Current and Previous values of the TemplatedActivityResources object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterTemplatedActivityResources = any;

/** EQL record filter for object type TemplatedJobDependencies */
export type EqlRecordFilterTemplatedJobDependencies = any;

/** An EQL filter string, which can access the Current and Previous values of the TemplatedJobDependencies object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterTemplatedJobDependencies = any;

/** EQL record filter for object type TemplatedJobProducts */
export type EqlRecordFilterTemplatedJobProducts = any;

/** An EQL filter string, which can access the Current and Previous values of the TemplatedJobProducts object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterTemplatedJobProducts = any;

/** EQL record filter for object type ShiftOfferShifts */
export type EqlRecordFilterShiftOfferShifts = any;

/** An EQL filter string, which can access the Current and Previous values of the ShiftOfferShifts object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterShiftOfferShifts = any;

/** EQL record filter for object type TemplatedJobTasks */
export type EqlRecordFilterTemplatedJobTasks = any;

/** An EQL filter string, which can access the Current and Previous values of the TemplatedJobTasks object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterTemplatedJobTasks = any;

/** EQL record filter for object type TemplatedJobTags */
export type EqlRecordFilterTemplatedJobTags = any;

/** An EQL filter string, which can access the Current and Previous values of the TemplatedJobTags object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterTemplatedJobTags = any;

/** EQL record filter for object type ResourceShiftOffers */
export type EqlRecordFilterResourceShiftOffers = any;

/** An EQL filter string, which can access the Current and Previous values of the ResourceShiftOffers object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterResourceShiftOffers = any;

/** EQL record filter for object type ShiftTags */
export type EqlRecordFilterShiftTags = any;

/** An EQL filter string, which can access the Current and Previous values of the ShiftTags object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterShiftTags = any;

/** EQL record filter for object type Locations */
export type EqlRecordFilterLocations = any;

/** An EQL filter string, which can access the Current and Previous values of the Locations object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterLocations = any;

/** EQL record filter for object type TemplatedShiftTags */
export type EqlRecordFilterTemplatedShiftTags = any;

/** An EQL filter string, which can access the Current and Previous values of the TemplatedShiftTags object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterTemplatedShiftTags = any;

/** EQL record filter for object type TemplatedJobTimeConstraints */
export type EqlRecordFilterTemplatedJobTimeConstraints = any;

/** An EQL filter string, which can access the Current and Previous values of the TemplatedJobTimeConstraints object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterTemplatedJobTimeConstraints = any;

/** EQL record filter for object type ResourceShiftBreaks */
export type EqlRecordFilterResourceShiftBreaks = any;

/** An EQL filter string, which can access the Current and Previous values of the ResourceShiftBreaks object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterResourceShiftBreaks = any;

/** EQL record filter for object type TemplatedAttendees */
export type EqlRecordFilterTemplatedAttendees = any;

/** An EQL filter string, which can access the Current and Previous values of the TemplatedAttendees object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterTemplatedAttendees = any;

/** EQL record filter for object type AccountTags */
export type EqlRecordFilterAccountTags = any;

/** An EQL filter string, which can access the Current and Previous values of the AccountTags object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterAccountTags = any;

/** EQL record filter for object type Regions */
export type EqlRecordFilterRegions = any;

/** An EQL filter string, which can access the Current and Previous values of the Regions object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterRegions = any;

/** EQL record filter for object type JobDependencies */
export type EqlRecordFilterJobDependencies = any;

/** An EQL filter string, which can access the Current and Previous values of the JobDependencies object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterJobDependencies = any;

/** EQL record filter for object type ScheduleTemplates */
export type EqlRecordFilterScheduleTemplates = any;

/** An EQL filter string, which can access the Current and Previous values of the ScheduleTemplates object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterScheduleTemplates = any;

/** EQL record filter for object type Users */
export type EqlRecordFilterUsers = any;

/** An EQL filter string, which can access the Current and Previous values of the Users object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterUsers = any;

/** EQL record filter for object type Resources */
export type EqlRecordFilterResources = any;

/** An EQL filter string, which can access the Current and Previous values of the Resources object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterResources = any;

/** EQL record filter for object type HolidayRegions */
export type EqlRecordFilterHolidayRegions = any;

/** An EQL filter string, which can access the Current and Previous values of the HolidayRegions object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterHolidayRegions = any;

/** EQL record filter for object type AvailabilityTemplates */
export type EqlRecordFilterAvailabilityTemplates = any;

/** An EQL filter string, which can access the Current and Previous values of the AvailabilityTemplates object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterAvailabilityTemplates = any;

/** EQL record filter for object type ResourceJobOffers */
export type EqlRecordFilterResourceJobOffers = any;

/** An EQL filter string, which can access the Current and Previous values of the ResourceJobOffers object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterResourceJobOffers = any;

/** EQL record filter for object type Accounts */
export type EqlRecordFilterAccounts = any;

/** An EQL filter string, which can access the Current and Previous values of the Accounts object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterAccounts = any;

/** EQL record filter for object type TemplatedResourceShifts */
export type EqlRecordFilterTemplatedResourceShifts = any;

/** An EQL filter string, which can access the Current and Previous values of the TemplatedResourceShifts object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterTemplatedResourceShifts = any;

/** EQL record filter for object type AvailabilityPatterns */
export type EqlRecordFilterAvailabilityPatterns = any;

/** An EQL filter string, which can access the Current and Previous values of the AvailabilityPatterns object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterAvailabilityPatterns = any;

/** EQL record filter for object type AvailabilityPatternResources */
export type EqlRecordFilterAvailabilityPatternResources = any;

/** An EQL filter string, which can access the Current and Previous values of the AvailabilityPatternResources object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterAvailabilityPatternResources = any;

/** EQL record filter for object type AvailabilityTemplateEntries */
export type EqlRecordFilterAvailabilityTemplateEntries = any;

/** An EQL filter string, which can access the Current and Previous values of the AvailabilityTemplateEntries object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterAvailabilityTemplateEntries = any;

/** EQL record filter for object type AccountResourceScores */
export type EqlRecordFilterAccountResourceScores = any;

/** An EQL filter string, which can access the Current and Previous values of the AccountResourceScores object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterAccountResourceScores = any;

/** EQL record filter for object type Contacts */
export type EqlRecordFilterContacts = any;

/** An EQL filter string, which can access the Current and Previous values of the Contacts object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterContacts = any;

/** EQL record filter for object type Products */
export type EqlRecordFilterProducts = any;

/** An EQL filter string, which can access the Current and Previous values of the Products object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterProducts = any;

/** EQL record filter for object type JobTasks */
export type EqlRecordFilterJobTasks = any;

/** An EQL filter string, which can access the Current and Previous values of the JobTasks object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterJobTasks = any;

/** EQL record filter for object type Holidays */
export type EqlRecordFilterHolidays = any;

/** An EQL filter string, which can access the Current and Previous values of the Holidays object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterHolidays = any;

/** EQL record filter for object type ResourceRequirements */
export type EqlRecordFilterResourceRequirements = any;

/** An EQL filter string, which can access the Current and Previous values of the ResourceRequirements object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterResourceRequirements = any;

/** EQL record filter for object type LocationResourceScores */
export type EqlRecordFilterLocationResourceScores = any;

/** An EQL filter string, which can access the Current and Previous values of the LocationResourceScores object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterLocationResourceScores = any;

/** EQL record filter for object type ResourceRegions */
export type EqlRecordFilterResourceRegions = any;

/** An EQL filter string, which can access the Current and Previous values of the ResourceRegions object and the Operation that was performed. This allows events to only be emitted if a certain field has change. */
export type EqlRecordChangeFilterResourceRegions = any;

// ====================================================
// Documents
// ====================================================

export namespace FetchJobsWithJobProducts {
  export type Variables = {
    filter: EqlQueryFilterJobs;
  };

  export type Query = {
    __typename?: "Query";

    jobs: Jobs;
  };

  export type Jobs = {
    __typename?: "JobsConnection";

    edges: Edges[];
  };

  export type Edges = {
    __typename?: "JobsEdge";

    node: Node;
  };

  export type Node = {
    __typename?: "Jobs";

    UID: string;

    Name: string;

    Start: Maybe<string>;

    End: Maybe<string>;

    Type: Maybe<string>;

    JobStatus: JobStatus;

    Duration: number;

    RegionId: string;

    Description: Maybe<string>;

    Contact: Maybe<Contact>;

    Account: Maybe<Account>;

    JobProducts: JobProducts[];

    JobAllocations: JobAllocations[];
  };

  export type Contact = {
    __typename?: "Contacts";

    UID: string;

    FullName: string;

    AccountId: Maybe<string>;
  };

  export type Account = {
    __typename?: "Accounts";

    UID: string;

    Name: string;

    Contacts: Contacts[];
  };

  export type Contacts = {
    __typename?: "Contacts";

    UID: string;

    FullName: string;
  };

  export type JobProducts = {
    __typename?: "JobProducts";

    UID: string;

    Name: string;

    Qty: number;
  };

  export type JobAllocations = {
    __typename?: "JobAllocations";

    UID: string;

    Name: string;

    Status: JobAllocationStatus;

    Start: Maybe<string>;

    End: Maybe<string>;

    Resource: Resource;
  };

  export type Resource = {
    __typename?: "Resources";

    UID: string;

    Name: string;

    IsActive: boolean;

    User: Maybe<User>;
  };

  export type User = {
    __typename?: "Users";

    Name: string;

    Email: string;

    UserTypes: Maybe<string[]>;
  };
}

export namespace FetchRegion {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    regions: Regions;
  };

  export type Regions = {
    __typename?: "RegionsConnection";

    edges: Edges[];
  };

  export type Edges = {
    __typename?: "RegionsEdge";

    node: Node;
  };

  export type Node = {
    __typename?: "Regions";

    UID: string;
  };
}

export namespace FetchProducts {
  export type Variables = {
    orderBy?: Maybe<EqlOrderByClauseProducts>;
    filter?: Maybe<EqlQueryFilterProducts>;
    offset?: Maybe<number>;
  };

  export type Query = {
    __typename?: "Query";

    page: Page;
  };

  export type Page = {
    __typename?: "ProductsConnection";

    totalCount: number;

    edges: Edges[];
  };

  export type Edges = {
    __typename?: "ProductsEdge";

    node: Node;
  };

  export type Node = {
    __typename?: "Products";

    UID: string;

    Name: string;

    Description: Maybe<string>;

    ProductCode: Maybe<string>;
  };
}

export namespace FetchEduMeSettings {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    eduMeSettings: EduMeSettings;
  };

  export type EduMeSettings = {
    __typename?: "EduMeSettingsConnection";

    edges: Edges[];
  };

  export type Edges = {
    __typename?: "EduMeSettingsEdge";

    node: Node;
  };

  export type Node = {
    __typename?: "EduMeSettings";

    UID: string;

    ApiKey: Maybe<string>;
  };
}

export namespace FetchResources {
  export type Variables = {
    filter?: Maybe<EqlQueryFilterResources>;
  };

  export type Query = {
    __typename?: "Query";

    resources: Resources;
  };

  export type Resources = {
    __typename?: "ResourcesConnection";

    edges: Edges[];
  };

  export type Edges = {
    __typename?: "ResourcesEdge";

    node: Node;
  };

  export type Node = {
    __typename?: "Resources";

    UID: string;

    Name: string;

    Email: Maybe<string>;

    MobilePhone: Maybe<string>;

    User: Maybe<User>;
  };

  export type User = {
    __typename?: "Users";

    UID: string;

    ExternalUserId: Maybe<string>;

    FirstName: Maybe<string>;

    LastName: string;
  };
}

export namespace FetchErrorLogs {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    errorLogs: ErrorLogs;
  };

  export type ErrorLogs = {
    __typename?: "ErrorLogsConnection";

    edges: Edges[];
  };

  export type Edges = {
    __typename?: "ErrorLogsEdge";

    node: Node;
  };

  export type Node = {
    __typename?: "ErrorLogs";

    UID: string;

    Log: Maybe<string>;

    Name: Maybe<string>;

    Payload: Maybe<string>;
  };
}

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Interfaces
// ====================================================

export interface SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;
}

// ====================================================
// Types
// ====================================================

export interface Query {
  accountResourceScores: AccountResourceScoresConnection;

  accountResourceScoresById?: Maybe<AccountResourceScores>;

  accountTags: AccountTagsConnection;

  accountTagsById?: Maybe<AccountTags>;

  accounts: AccountsConnection;

  accountsById?: Maybe<Accounts>;

  activities: ActivitiesConnection;

  activitiesById?: Maybe<Activities>;

  activityResources: ActivityResourcesConnection;

  activityResourcesById?: Maybe<ActivityResources>;

  attendees: AttendeesConnection;

  attendeesById?: Maybe<Attendees>;

  availabilities: AvailabilitiesConnection;

  availabilitiesById?: Maybe<Availabilities>;

  availabilityPatternResources: AvailabilityPatternResourcesConnection;

  availabilityPatternResourcesById?: Maybe<AvailabilityPatternResources>;

  availabilityPatterns: AvailabilityPatternsConnection;

  availabilityPatternsById?: Maybe<AvailabilityPatterns>;

  availabilityTemplateEntries: AvailabilityTemplateEntriesConnection;

  availabilityTemplateEntriesById?: Maybe<AvailabilityTemplateEntries>;

  availabilityTemplateResources: AvailabilityTemplateResourcesConnection;

  availabilityTemplateResourcesById?: Maybe<AvailabilityTemplateResources>;

  availabilityTemplates: AvailabilityTemplatesConnection;

  availabilityTemplatesById?: Maybe<AvailabilityTemplates>;

  clientAvailabilities: ClientAvailabilitiesConnection;

  clientAvailabilitiesById?: Maybe<ClientAvailabilities>;

  contactTags: ContactTagsConnection;

  contactTagsById?: Maybe<ContactTags>;

  contacts: ContactsConnection;

  contactsById?: Maybe<Contacts>;

  eduMeSettings: EduMeSettingsConnection;

  eduMeSettingsById?: Maybe<EduMeSettings>;

  errorLogs: ErrorLogsConnection;

  errorLogsById?: Maybe<ErrorLogs>;

  holidayRegions: HolidayRegionsConnection;

  holidayRegionsById?: Maybe<HolidayRegions>;

  holidays: HolidaysConnection;

  holidaysById?: Maybe<Holidays>;

  jobAllocations: JobAllocationsConnection;

  jobAllocationsById?: Maybe<JobAllocations>;

  jobDependencies: JobDependenciesConnection;

  jobDependenciesById?: Maybe<JobDependencies>;

  jobOffers: JobOffersConnection;

  jobOffersById?: Maybe<JobOffers>;

  jobProducts: JobProductsConnection;

  jobProductsById?: Maybe<JobProducts>;

  jobTags: JobTagsConnection;

  jobTagsById?: Maybe<JobTags>;

  jobTasks: JobTasksConnection;

  jobTasksById?: Maybe<JobTasks>;

  jobTimeConstraints: JobTimeConstraintsConnection;

  jobTimeConstraintsById?: Maybe<JobTimeConstraints>;

  jobs: JobsConnection;

  jobsById?: Maybe<Jobs>;

  locationResourceScores: LocationResourceScoresConnection;

  locationResourceScoresById?: Maybe<LocationResourceScores>;

  locations: LocationsConnection;

  locationsById?: Maybe<Locations>;

  products: ProductsConnection;

  productsById?: Maybe<Products>;

  recurringSchedules: RecurringSchedulesConnection;

  recurringSchedulesById?: Maybe<RecurringSchedules>;

  regions: RegionsConnection;

  regionsById?: Maybe<Regions>;

  resourceJobOffers: ResourceJobOffersConnection;

  resourceJobOffersById?: Maybe<ResourceJobOffers>;

  resourceOverrideRegions: ResourceOverrideRegionsConnection;

  resourceOverrideRegionsById?: Maybe<ResourceOverrideRegions>;

  resourceOverrides: ResourceOverridesConnection;

  resourceOverridesById?: Maybe<ResourceOverrides>;

  resourceRegions: ResourceRegionsConnection;

  resourceRegionsById?: Maybe<ResourceRegions>;

  resourceRequirementTags: ResourceRequirementTagsConnection;

  resourceRequirementTagsById?: Maybe<ResourceRequirementTags>;

  resourceRequirements: ResourceRequirementsConnection;

  resourceRequirementsById?: Maybe<ResourceRequirements>;

  resourceShiftBreaks: ResourceShiftBreaksConnection;

  resourceShiftBreaksById?: Maybe<ResourceShiftBreaks>;

  resourceShiftOffers: ResourceShiftOffersConnection;

  resourceShiftOffersById?: Maybe<ResourceShiftOffers>;

  resourceShifts: ResourceShiftsConnection;

  resourceShiftsById?: Maybe<ResourceShifts>;

  resourceTags: ResourceTagsConnection;

  resourceTagsById?: Maybe<ResourceTags>;

  resources: ResourcesConnection;

  resourcesById?: Maybe<Resources>;

  resourcesInRegions: ResourcesConnection;

  scheduleTemplates: ScheduleTemplatesConnection;

  scheduleTemplatesById?: Maybe<ScheduleTemplates>;

  shiftOfferShifts: ShiftOfferShiftsConnection;

  shiftOfferShiftsById?: Maybe<ShiftOfferShifts>;

  shiftOffers: ShiftOffersConnection;

  shiftOffersById?: Maybe<ShiftOffers>;

  shiftTags: ShiftTagsConnection;

  shiftTagsById?: Maybe<ShiftTags>;

  shifts: ShiftsConnection;

  shiftsById?: Maybe<Shifts>;

  tags: TagsConnection;

  tagsById?: Maybe<Tags>;

  templatedActivities: TemplatedActivitiesConnection;

  templatedActivitiesById?: Maybe<TemplatedActivities>;

  templatedActivityResources: TemplatedActivityResourcesConnection;

  templatedActivityResourcesById?: Maybe<TemplatedActivityResources>;

  templatedAttendees: TemplatedAttendeesConnection;

  templatedAttendeesById?: Maybe<TemplatedAttendees>;

  templatedJobAllocations: TemplatedJobAllocationsConnection;

  templatedJobAllocationsById?: Maybe<TemplatedJobAllocations>;

  templatedJobDependencies: TemplatedJobDependenciesConnection;

  templatedJobDependenciesById?: Maybe<TemplatedJobDependencies>;

  templatedJobProducts: TemplatedJobProductsConnection;

  templatedJobProductsById?: Maybe<TemplatedJobProducts>;

  templatedJobTags: TemplatedJobTagsConnection;

  templatedJobTagsById?: Maybe<TemplatedJobTags>;

  templatedJobTasks: TemplatedJobTasksConnection;

  templatedJobTasksById?: Maybe<TemplatedJobTasks>;

  templatedJobTimeConstraints: TemplatedJobTimeConstraintsConnection;

  templatedJobTimeConstraintsById?: Maybe<TemplatedJobTimeConstraints>;

  templatedJobs: TemplatedJobsConnection;

  templatedJobsById?: Maybe<TemplatedJobs>;

  templatedResourceRequirementTags: TemplatedResourceRequirementTagsConnection;

  templatedResourceRequirementTagsById?: Maybe<
    TemplatedResourceRequirementTags
  >;

  templatedResourceRequirements: TemplatedResourceRequirementsConnection;

  templatedResourceRequirementsById?: Maybe<TemplatedResourceRequirements>;

  templatedResourceShifts: TemplatedResourceShiftsConnection;

  templatedResourceShiftsById?: Maybe<TemplatedResourceShifts>;

  templatedShiftTags: TemplatedShiftTagsConnection;

  templatedShiftTagsById?: Maybe<TemplatedShiftTags>;

  templatedShifts: TemplatedShiftsConnection;

  templatedShiftsById?: Maybe<TemplatedShifts>;

  userRegions: UserRegionsConnection;

  userRegionsById?: Maybe<UserRegions>;

  users: UsersConnection;

  usersById?: Maybe<Users>;
  /** Retrieve all `Notifications` starting from a given timestamp. The entries are sorted by the `Timestamp` field in descending order. The result set is limited to the first 10,000 entries. Because notifications can refer to different object types (currently `Jobs`, `Shifts`, `ResourceJobOffers` and `ResourceShiftOffers`), the `Object` field is a union type that can be queried using type-dependent query fragments. The type of `Object` can be queried by introspection with the `__typename` meta-field. Example: ``` { notifications(start: "2019-08-11T00:42:13.666Z") { Timestamp Action Object { __typename ... on Jobs { UID Name Description JobStart: Start JobEnd: End JobStatus } ... on Shifts { UID DisplayName Start End } ... on ResourceJobOffers { UID JobOffer { UID Status Job { UID Name Description ActualStart ActualEnd JobStatus } } } ... on ResourceShiftOffers { UID ShiftOffer { UID Status Shifts { Shift { UID DisplayName Start End } } } } } } } ``` */
  notifications: (Maybe<Notifications>)[];
}

export interface AccountResourceScoresConnection {
  edges: AccountResourceScoresEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface AccountResourceScoresEdge {
  cursor: string;

  node: AccountResourceScores;

  offset: number;
}

export interface AccountResourceScores {
  Account: Accounts;

  AccountId: string;

  Blacklisted: boolean;

  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Resource: Resources;

  ResourceId: string;

  UID: string;

  Whitelisted: boolean;
}

export interface Accounts {
  Availabilities: ClientAvailabilities[];

  BillingCity?: Maybe<string>;

  BillingPostalCode?: Maybe<string>;

  BillingState?: Maybe<string>;

  BillingStreet?: Maybe<string>;

  Contacts: Contacts[];

  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  Fax?: Maybe<string>;

  Jobs: Jobs[];

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Locations: Locations[];

  Name: string;

  Phone?: Maybe<string>;

  Rank?: Maybe<number>;

  RequiresWhitelist: boolean;

  ResourceScores: AccountResourceScores[];

  ShippingCity?: Maybe<string>;

  ShippingPostalCode?: Maybe<string>;

  ShippingState?: Maybe<string>;

  ShippingStreet?: Maybe<string>;

  Tags: AccountTags[];

  UID: string;
}

export interface ClientAvailabilities {
  Account?: Maybe<Accounts>;

  AccountId?: Maybe<string>;

  Contact?: Maybe<Contacts>;

  ContactId?: Maybe<string>;

  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  End: string;

  IsAvailable: boolean;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  PreferredEnd?: Maybe<string>;

  PreferredStart?: Maybe<string>;

  RecurringSchedule?: Maybe<RecurringSchedules>;

  RecurringScheduleId?: Maybe<string>;

  Start: string;

  UID: string;
}

export interface Contacts {
  Account?: Maybe<Accounts>;

  AccountId?: Maybe<string>;

  Availabilities: ClientAvailabilities[];

  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  Email?: Maybe<string>;

  FirstName?: Maybe<string>;

  FullName: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  LastName: string;

  MailingCity?: Maybe<string>;

  MailingPostalCode?: Maybe<string>;

  MailingState?: Maybe<string>;

  MailingStreet?: Maybe<string>;

  MobilePhone?: Maybe<string>;

  OtherCity?: Maybe<string>;

  OtherPostalCode?: Maybe<string>;

  OtherState?: Maybe<string>;

  OtherStreet?: Maybe<string>;

  Phone?: Maybe<string>;

  Region?: Maybe<Regions>;

  RegionId?: Maybe<string>;

  Tags: ContactTags[];

  Title?: Maybe<string>;

  UID: string;
}

export interface Users {
  City?: Maybe<string>;

  Country?: Maybe<string>;

  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  Email: string;

  ExternalUserId?: Maybe<string>;

  FirstName?: Maybe<string>;

  FullPhotoUrl: string;

  IsActive: boolean;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  LastName: string;

  MobilePhone?: Maybe<string>;

  Name: string;

  PostalCode?: Maybe<string>;

  Resources: Resources[];

  SmallPhotoUrl: string;

  State?: Maybe<string>;

  Street?: Maybe<string>;

  UID: string;

  UserRegions: UserRegions[];

  UserTypes?: Maybe<string[]>;
}

export interface Resources {
  AccountScores: AccountResourceScores[];

  Activities: Activities[];

  Alias?: Maybe<string>;

  AutoSchedule: boolean;

  Availabilities: Availabilities[];

  AvailabilityPatterns: AvailabilityPatternResources[];

  Category?: Maybe<string>;

  CountryCode?: Maybe<string>;

  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  Email?: Maybe<string>;

  EmploymentType?: Maybe<string>;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  HomeAddress?: Maybe<string>;

  IsActive: boolean;

  JobAllocations: JobAllocations[];

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  LocationScores: LocationResourceScores[];

  MobilePhone?: Maybe<string>;

  Name: string;

  Notes?: Maybe<string>;

  NotificationType?: Maybe<string>;

  PrimaryPhone?: Maybe<string>;

  PrimaryRegion: Regions;

  PrimaryRegionId: string;

  Rating?: Maybe<number>;

  ResourceActivities: ActivityResources[];

  ResourceOverrides: ResourceOverrides[];

  ResourceRegions: ResourceRegions[];

  ResourceShifts: ResourceShifts[];

  ResourceTags: ResourceTags[];

  ResourceType?: Maybe<string>;

  TeamId?: Maybe<number>;

  TemplatedActivities: TemplatedActivities[];

  TemplatedJobAllocations: TemplatedJobAllocations[];

  TemplatedResourceActivities: TemplatedActivityResources[];

  TemplatedResourceShifts: TemplatedResourceShifts[];

  UID: string;

  User?: Maybe<Users>;

  UserId?: Maybe<string>;

  WeeklyHours?: Maybe<number>;

  WorkingHourType?: Maybe<WorkingHourType>;
}

export interface Activities {
  ActivityResources: ActivityResources[];

  Address?: Maybe<string>;

  CopiedFrom?: Maybe<Activities>;

  CopiedFromId?: Maybe<string>;

  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  End: string;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Location?: Maybe<Locations>;

  LocationId?: Maybe<string>;

  Name: string;

  Notes?: Maybe<string>;

  Quantity?: Maybe<number>;

  Resource?: Maybe<Resources>;

  ResourceId?: Maybe<string>;

  ScheduleTemplate?: Maybe<ScheduleTemplates>;

  ScheduleTemplateId?: Maybe<string>;

  Start: string;

  TemplatedActivity?: Maybe<TemplatedActivities>;

  TemplatedActivityId?: Maybe<string>;

  Timezone?: Maybe<string>;

  Type?: Maybe<string>;

  UID: string;
}

export interface ActivityResources {
  Activity: Activities;

  ActivityId: string;

  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Resource: Resources;

  ResourceId: string;

  UID: string;
}

export interface Locations {
  Account?: Maybe<Accounts>;

  AccountId?: Maybe<string>;

  Activities: Activities[];

  Address?: Maybe<string>;

  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  Jobs: Jobs[];

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  Region?: Maybe<Regions>;

  RegionId?: Maybe<string>;

  RequiresWhitelist: boolean;

  ResourceScores: LocationResourceScores[];

  Shifts: Shifts[];

  Type?: Maybe<string>;

  UID: string;
}

export interface Jobs {
  AbortReason?: Maybe<string>;

  Account?: Maybe<Accounts>;

  AccountId?: Maybe<string>;

  ActualEnd?: Maybe<string>;

  ActualStart?: Maybe<string>;

  Address?: Maybe<string>;

  Attendees: Attendees[];

  AutoSchedule: boolean;

  CanBeDeclined: boolean;

  CompletionNotes?: Maybe<string>;

  Contact?: Maybe<Contacts>;

  ContactId?: Maybe<string>;

  CopiedFrom?: Maybe<Jobs>;

  CopiedFromId?: Maybe<string>;

  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  CustomerConfirmationStatus?: Maybe<CustomerConfirmationStatus>;

  Description?: Maybe<string>;

  Duration: number;

  End?: Maybe<string>;

  EstimatedEnd?: Maybe<string>;

  EstimatedStart?: Maybe<string>;

  FollowupReason?: Maybe<string>;

  Followups: Jobs[];

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  IsGroupEvent: boolean;

  JobAllocationCount: number;

  JobAllocationTimeSource: boolean;

  JobAllocations: JobAllocations[];

  JobDependenciesFrom: JobDependencies[];

  JobDependenciesTo: JobDependencies[];

  JobOffers: JobOffers[];

  JobProducts: JobProducts[];

  JobStatus: JobStatus;

  JobTags: JobTags[];

  JobTasks: JobTasks[];

  JobTimeConstraints: JobTimeConstraints[];

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Location?: Maybe<Locations>;

  LocationId?: Maybe<string>;

  Locked: boolean;

  MaxAttendees?: Maybe<number>;

  MinAttendees?: Maybe<number>;

  ModuleId?: Maybe<number>;

  Name: string;

  NotesComments?: Maybe<string>;

  NotifyBy?: Maybe<string>;

  NotifyPeriod?: Maybe<number>;

  Parent?: Maybe<Jobs>;

  ParentId?: Maybe<string>;

  Quantity?: Maybe<number>;

  RecurringSchedule?: Maybe<RecurringSchedules>;

  RecurringScheduleId?: Maybe<string>;

  Region: Regions;

  RegionId: string;

  ResourceRequirements: ResourceRequirements[];

  ScheduleTemplate?: Maybe<ScheduleTemplates>;

  ScheduleTemplateId?: Maybe<string>;

  Start?: Maybe<string>;

  TemplatedJob?: Maybe<TemplatedJobs>;

  TemplatedJobId?: Maybe<string>;

  Timezone: string;

  Type?: Maybe<string>;

  UID: string;

  Urgency?: Maybe<string>;

  VirtualMeetingId?: Maybe<string>;

  VirtualMeetingInfo?: Maybe<string>;

  VirtualMeetingURL?: Maybe<string>;
}

export interface Attendees {
  CancelReason?: Maybe<string>;

  Contact: Contacts;

  ContactId: string;

  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  Job: Jobs;

  JobId: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Status: AttendeeStatus;

  TimeCancelled?: Maybe<string>;

  UID: string;
}

export interface JobAllocations {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  DeclineDescription?: Maybe<string>;

  DeclineReason?: Maybe<string>;

  Duration?: Maybe<number>;

  End?: Maybe<string>;

  EstimatedTravelDistance?: Maybe<number>;

  EstimatedTravelTime?: Maybe<number>;

  GeoCheckedInLatitude?: Maybe<number>;

  GeoCheckedInLongitude?: Maybe<number>;

  GeoCompletedLatitude?: Maybe<number>;

  GeoCompletedLongitude?: Maybe<number>;

  GeoInProgressLatitude?: Maybe<number>;

  GeoInProgressLongitude?: Maybe<number>;

  GeoStartTravelLatitude?: Maybe<number>;

  GeoStartTravelLongitude?: Maybe<number>;

  Job: Jobs;

  JobId: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  NotificationType?: Maybe<string>;

  PhoneResponse?: Maybe<string>;

  Resource: Resources;

  ResourceId: string;

  ResourceRequirement?: Maybe<ResourceRequirements>;

  ResourceRequirementId?: Maybe<string>;

  Start?: Maybe<string>;

  Status: JobAllocationStatus;

  TeamLeader: boolean;

  TimeCheckedIn?: Maybe<string>;

  TimeCompleted?: Maybe<string>;

  TimeInProgress?: Maybe<string>;

  TimePublished?: Maybe<string>;

  TimeResponded?: Maybe<string>;

  TimeStartTravel?: Maybe<string>;

  TravelDistance?: Maybe<number>;

  TravelTime?: Maybe<number>;

  UID: string;
}

export interface ResourceRequirements {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  Description?: Maybe<string>;

  Duration?: Maybe<number>;

  Job: Jobs;

  JobAllocationCount: number;

  JobAllocationTimeSource: boolean;

  JobAllocations: JobAllocations[];

  JobId: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  Quantity: number;

  RelativeStart?: Maybe<number>;

  ScheduledEnd?: Maybe<string>;

  ScheduledStart?: Maybe<string>;

  Status: JobStatus;

  Tags: ResourceRequirementTags[];

  UID: string;
}

export interface ResourceRequirementTags {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Required: boolean;

  ResourceRequirement: ResourceRequirements;

  ResourceRequirementId: string;

  Tag: Tags;

  TagId: string;

  UID: string;

  Weighting?: Maybe<number>;
}

export interface Tags {
  Classification?: Maybe<TagClassification>;

  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  Type?: Maybe<string>;

  UID: string;
}

export interface JobDependencies {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  FromAnchor: JobDependencyAnchor;

  FromJob: Jobs;

  FromJobId: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  ToAnchor: JobDependencyAnchor;

  ToAnchorMaxOffsetMinutes?: Maybe<number>;

  ToAnchorMinOffsetMinutes?: Maybe<number>;

  ToJob: Jobs;

  ToJobId: string;

  UID: string;
}

export interface JobOffers {
  CreatedBy: Users;

  CreatedById: string;

  CreatedByResource: boolean;

  CreatedDate: string;

  Job: Jobs;

  JobId: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  ResourceJobOffers: ResourceJobOffers[];

  ResourceRequirement?: Maybe<ResourceRequirements>;

  ResourceRequirementId?: Maybe<string>;

  Status: OfferStatus;

  UID: string;
}

export interface ResourceJobOffers {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  JobOffer: JobOffers;

  JobOfferId: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Resource: Resources;

  ResourceId: string;

  Response?: Maybe<OfferResponse>;

  Status: ResourceOfferStatus;

  TimeNotified?: Maybe<string>;

  TimeResponded?: Maybe<string>;

  UID: string;
}

export interface JobProducts {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  Job: Jobs;

  JobId: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  Product?: Maybe<Products>;

  ProductId?: Maybe<string>;

  ProductName?: Maybe<string>;

  Qty: number;

  UID: string;
}

export interface Products {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  Description?: Maybe<string>;

  Family?: Maybe<string>;

  IsActive: boolean;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  ProductCode?: Maybe<string>;

  UID: string;
}

export interface JobTags {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  Job: Jobs;

  JobId: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Required: boolean;

  Tag: Tags;

  TagId: string;

  UID: string;

  Weighting?: Maybe<number>;
}

export interface JobTasks {
  Completed: boolean;

  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  Description?: Maybe<string>;

  Job: Jobs;

  JobId: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  Seq: number;

  UID: string;
}

export interface JobTimeConstraints {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  EndBefore?: Maybe<string>;

  Job: Jobs;

  JobId: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Required: boolean;

  StartAfter?: Maybe<string>;

  StartBefore?: Maybe<string>;

  Type: JobTimeConstraintType;

  UID: string;
}

export interface RecurringSchedules {
  AckAllJobs: boolean;

  ClientAvailabilities: ClientAvailabilities[];

  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  Description?: Maybe<string>;

  Jobs: Jobs[];

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  Pattern?: Maybe<string>;

  Summary?: Maybe<string>;

  UID: string;
}

export interface Regions {
  CountryCode?: Maybe<string>;

  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  Description?: Maybe<string>;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  Radius?: Maybe<number>;

  Resources: Resources[];

  Timezone: string;

  UID: string;

  UserRegions: UserRegions[];
}

export interface UserRegions {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Region: Regions;

  RegionId: string;

  UID: string;

  User: Users;

  UserId: string;
}

export interface ScheduleTemplates {
  Activities: Activities[];

  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  DeletedBy?: Maybe<Users>;

  DeletedById?: Maybe<string>;

  DeletedDate?: Maybe<string>;

  Description?: Maybe<string>;

  IsDeleted: boolean;

  Jobs: Jobs[];

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  PeriodDays?: Maybe<number>;

  Shifts: Shifts[];

  TemplatedActivities: TemplatedActivities[];

  TemplatedJobs: TemplatedJobs[];

  TemplatedShifts: TemplatedShifts[];

  UID: string;
}

export interface Shifts {
  CopiedFrom?: Maybe<Shifts>;

  CopiedFromId?: Maybe<string>;

  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  DisplayName?: Maybe<string>;

  Duration: number;

  End: string;

  IsDraft: boolean;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Location?: Maybe<Locations>;

  LocationId?: Maybe<string>;

  Name: string;

  Region?: Maybe<Regions>;

  RegionId?: Maybe<string>;

  ResourceShifts: ResourceShifts[];

  ScheduleTemplate?: Maybe<ScheduleTemplates>;

  ScheduleTemplateId?: Maybe<string>;

  ShiftOffers: ShiftOfferShifts[];

  ShiftTags: ShiftTags[];

  Start: string;

  TemplatedShift?: Maybe<TemplatedShifts>;

  TemplatedShiftId?: Maybe<string>;

  UID: string;
}

export interface ResourceShifts {
  ActualEnd?: Maybe<string>;

  ActualStart?: Maybe<string>;

  Breaks: ResourceShiftBreaks[];

  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Resource: Resources;

  ResourceId: string;

  Shift: Shifts;

  ShiftId: string;

  UID: string;
}

export interface ResourceShiftBreaks {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  End?: Maybe<string>;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  ResourceShift: ResourceShifts;

  ResourceShiftId: string;

  Start: string;

  UID: string;
}

export interface ShiftOfferShifts {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Shift: Shifts;

  ShiftId: string;

  ShiftOffer: ShiftOffers;

  ShiftOfferId: string;

  UID: string;
}

export interface ShiftOffers {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  ResourceShiftOffers: ResourceShiftOffers[];

  Shifts: ShiftOfferShifts[];

  Status: OfferStatus;

  UID: string;
}

export interface ResourceShiftOffers {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Resource: Resources;

  ResourceId: string;

  Response?: Maybe<OfferResponse>;

  ShiftOffer: ShiftOffers;

  ShiftOfferId: string;

  Status: ResourceOfferStatus;

  TimeNotified?: Maybe<string>;

  TimeResponded?: Maybe<string>;

  UID: string;
}

export interface ShiftTags {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Required: boolean;

  Shift: Shifts;

  ShiftId: string;

  Tag: Tags;

  TagId: string;

  UID: string;

  Weighting?: Maybe<number>;
}

export interface TemplatedShifts {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  DisplayName?: Maybe<string>;

  Duration: number;

  IsDraft: boolean;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Location?: Maybe<Locations>;

  LocationId?: Maybe<string>;

  Region: Regions;

  RegionId: string;

  ScheduleTemplate: ScheduleTemplates;

  ScheduleTemplateId: string;

  Shifts: Shifts[];

  StartOffsetDays: number;

  StartTimeOfDay: LocalTime;

  TemplatedResourceShifts: TemplatedResourceShifts[];

  TemplatedShiftTags: TemplatedShiftTags[];

  UID: string;
}

export interface TemplatedResourceShifts {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Resource: Resources;

  ResourceId: string;

  TemplatedShift: TemplatedShifts;

  TemplatedShiftId: string;

  UID: string;
}

export interface TemplatedShiftTags {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Required: boolean;

  Tag: Tags;

  TagId: string;

  TemplatedShift: TemplatedShifts;

  TemplatedShiftId: string;

  UID: string;

  Weighting?: Maybe<number>;
}

export interface TemplatedActivities {
  Activities: Activities[];

  Address?: Maybe<string>;

  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  Duration: number;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Location?: Maybe<Locations>;

  LocationId?: Maybe<string>;

  Notes?: Maybe<string>;

  Quantity?: Maybe<number>;

  Resource?: Maybe<Resources>;

  ResourceId?: Maybe<string>;

  ScheduleTemplate: ScheduleTemplates;

  ScheduleTemplateId: string;

  StartOffsetDays: number;

  StartTimeOfDay: LocalTime;

  TemplatedActivityResources: TemplatedActivityResources[];

  Timezone: string;

  Type?: Maybe<string>;

  UID: string;
}

export interface TemplatedActivityResources {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Resource: Resources;

  ResourceId: string;

  TemplatedActivity: TemplatedActivities;

  TemplatedActivityId: string;

  UID: string;
}

export interface TemplatedJobs {
  Account?: Maybe<Accounts>;

  AccountId?: Maybe<string>;

  Address?: Maybe<string>;

  AutoSchedule: boolean;

  CanBeDeclined: boolean;

  Contact?: Maybe<Contacts>;

  ContactId?: Maybe<string>;

  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  CustomerConfirmationStatus?: Maybe<CustomerConfirmationStatus>;

  Description?: Maybe<string>;

  Duration: number;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  IsGroupEvent: boolean;

  JobAllocationTimeSource: boolean;

  Jobs: Jobs[];

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Location?: Maybe<Locations>;

  LocationId?: Maybe<string>;

  Locked: boolean;

  MaxAttendees?: Maybe<number>;

  MinAttendees?: Maybe<number>;

  NotesComments?: Maybe<string>;

  NotifyPeriod?: Maybe<number>;

  Quantity?: Maybe<number>;

  Region: Regions;

  RegionId: string;

  ScheduleTemplate: ScheduleTemplates;

  ScheduleTemplateId: string;

  StartOffsetDays: number;

  StartTimeOfDay: LocalTime;

  TemplatedAttendees: TemplatedAttendees[];

  TemplatedJobAllocations: TemplatedJobAllocations[];

  TemplatedJobDependenciesFrom: TemplatedJobDependencies[];

  TemplatedJobDependenciesTo: TemplatedJobDependencies[];

  TemplatedJobProducts: TemplatedJobProducts[];

  TemplatedJobTags: TemplatedJobTags[];

  TemplatedJobTasks: TemplatedJobTasks[];

  TemplatedJobTimeConstraints: TemplatedJobTimeConstraints[];

  TemplatedResourceRequirements: TemplatedResourceRequirements[];

  Type?: Maybe<string>;

  UID: string;

  Urgency?: Maybe<string>;

  VirtualMeetingId?: Maybe<string>;

  VirtualMeetingInfo?: Maybe<string>;

  VirtualMeetingURL?: Maybe<string>;
}

export interface TemplatedAttendees {
  Contact: Contacts;

  ContactId: string;

  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  TemplatedJob: TemplatedJobs;

  TemplatedJobId: string;

  UID: string;
}

export interface TemplatedJobAllocations {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  Duration?: Maybe<number>;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  NotificationType?: Maybe<string>;

  Resource: Resources;

  ResourceId: string;

  StartOffsetDays?: Maybe<number>;

  StartTimeOfDay?: Maybe<LocalTime>;

  Status: JobAllocationStatus;

  TeamLeader: boolean;

  TemplatedJob: TemplatedJobs;

  TemplatedJobId: string;

  TemplatedResourceRequirement?: Maybe<TemplatedResourceRequirements>;

  TemplatedResourceRequirementId?: Maybe<string>;

  UID: string;
}

export interface TemplatedResourceRequirements {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  Description?: Maybe<string>;

  JobAllocationTimeSource: boolean;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Quantity: number;

  RelativeStart?: Maybe<number>;

  TemplatedJob: TemplatedJobs;

  TemplatedJobAllocations: TemplatedJobAllocations[];

  TemplatedJobId: string;

  TemplatedTags: TemplatedResourceRequirementTags[];

  UID: string;
}

export interface TemplatedResourceRequirementTags {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Required: boolean;

  Tag: Tags;

  TagId: string;

  TemplatedResourceRequirement: TemplatedResourceRequirements;

  TemplatedResourceRequirementId: string;

  UID: string;

  Weighting?: Maybe<number>;
}

export interface TemplatedJobDependencies {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  FromAnchor: JobDependencyAnchor;

  FromTemplatedJob: TemplatedJobs;

  FromTemplatedJobId: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  ToAnchor: JobDependencyAnchor;

  ToAnchorMaxOffsetMinutes?: Maybe<number>;

  ToAnchorMinOffsetMinutes?: Maybe<number>;

  ToTemplatedJob: TemplatedJobs;

  ToTemplatedJobId: string;

  UID: string;
}

export interface TemplatedJobProducts {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Product?: Maybe<Products>;

  ProductId?: Maybe<string>;

  Qty: number;

  TemplatedJob: TemplatedJobs;

  TemplatedJobId: string;

  UID: string;
}

export interface TemplatedJobTags {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Required: boolean;

  Tag: Tags;

  TagId: string;

  TemplatedJob: TemplatedJobs;

  TemplatedJobId: string;

  UID: string;

  Weighting?: Maybe<number>;
}

export interface TemplatedJobTasks {
  Completed: boolean;

  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  Description?: Maybe<string>;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  Seq: number;

  TemplatedJob: TemplatedJobs;

  TemplatedJobId: string;

  UID: string;
}

export interface TemplatedJobTimeConstraints {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  EndBeforeOffsetDays?: Maybe<number>;

  EndBeforeTimeOfDay?: Maybe<LocalTime>;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Required: boolean;

  StartAfterOffsetDays?: Maybe<number>;

  StartAfterTimeOfDay?: Maybe<LocalTime>;

  StartBeforeOffsetDays?: Maybe<number>;

  StartBeforeTimeOfDay?: Maybe<LocalTime>;

  TemplatedJob: TemplatedJobs;

  TemplatedJobId: string;

  Type: JobTimeConstraintType;

  UID: string;
}

export interface LocationResourceScores {
  Blacklisted: boolean;

  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Location: Locations;

  LocationId: string;

  Resource: Resources;

  ResourceId: string;

  UID: string;

  Whitelisted: boolean;
}

export interface Availabilities {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  Finish: string;

  IsAvailable: boolean;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Notes?: Maybe<string>;

  Resource: Resources;

  ResourceId: string;

  Start: string;

  Status?: Maybe<AvailabilityStatus>;

  Type?: Maybe<string>;

  UID: string;
}

export interface AvailabilityPatternResources {
  AvailabilityPattern: AvailabilityPatterns;

  AvailabilityPatternId: string;

  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  End?: Maybe<string>;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Resource: Resources;

  ResourceId: string;

  Start: string;

  Status?: Maybe<AvailabilityStatus>;

  UID: string;
}

export interface AvailabilityPatterns {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  Description?: Maybe<string>;

  Hash: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  Pattern: string;

  Resources: AvailabilityPatternResources[];

  UID: string;
}

export interface ResourceOverrides {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  Description?: Maybe<string>;

  End: string;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  HomeAddress?: Maybe<string>;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Resource: Resources;

  ResourceId: string;

  ResourceOverrideRegions: ResourceOverrideRegions[];

  Start: string;

  UID: string;
}

export interface ResourceOverrideRegions {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Region: Regions;

  RegionId: string;

  ResourceOverride: ResourceOverrides;

  ResourceOverrideId: string;

  UID: string;
}

export interface ResourceRegions {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  End?: Maybe<string>;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Region: Regions;

  RegionId: string;

  Resource: Resources;

  ResourceId: string;

  Start?: Maybe<string>;

  UID: string;
}

export interface ResourceTags {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  ExpiryDate?: Maybe<string>;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Resource: Resources;

  ResourceId: string;

  Tag: Tags;

  TagId: string;

  UID: string;
}

export interface ContactTags {
  Contact: Contacts;

  ContactId: string;

  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Required: boolean;

  Tag: Tags;

  TagId: string;

  UID: string;

  Weighting?: Maybe<number>;
}

export interface AccountTags {
  Account: Accounts;

  AccountId: string;

  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Required: boolean;

  Tag: Tags;

  TagId: string;

  UID: string;

  Weighting?: Maybe<number>;
}

/** Information about pagination in a connection. */
export interface PageInfo {
  /** When paginating forwards, are there more items? */
  hasNextPage: boolean;
  /** When paginating backwards, are there more items? */
  hasPreviousPage: boolean;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<string>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<string>;
}

export interface AccountTagsConnection {
  edges: AccountTagsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface AccountTagsEdge {
  cursor: string;

  node: AccountTags;

  offset: number;
}

export interface AccountsConnection {
  edges: AccountsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface AccountsEdge {
  cursor: string;

  node: Accounts;

  offset: number;
}

export interface ActivitiesConnection {
  edges: ActivitiesEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface ActivitiesEdge {
  cursor: string;

  node: Activities;

  offset: number;
}

export interface ActivityResourcesConnection {
  edges: ActivityResourcesEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface ActivityResourcesEdge {
  cursor: string;

  node: ActivityResources;

  offset: number;
}

export interface AttendeesConnection {
  edges: AttendeesEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface AttendeesEdge {
  cursor: string;

  node: Attendees;

  offset: number;
}

export interface AvailabilitiesConnection {
  edges: AvailabilitiesEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface AvailabilitiesEdge {
  cursor: string;

  node: Availabilities;

  offset: number;
}

export interface AvailabilityPatternResourcesConnection {
  edges: AvailabilityPatternResourcesEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface AvailabilityPatternResourcesEdge {
  cursor: string;

  node: AvailabilityPatternResources;

  offset: number;
}

export interface AvailabilityPatternsConnection {
  edges: AvailabilityPatternsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface AvailabilityPatternsEdge {
  cursor: string;

  node: AvailabilityPatterns;

  offset: number;
}

export interface AvailabilityTemplateEntriesConnection {
  edges: AvailabilityTemplateEntriesEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface AvailabilityTemplateEntriesEdge {
  cursor: string;

  node: AvailabilityTemplateEntries;

  offset: number;
}

export interface AvailabilityTemplateEntries {
  AvailabilityTemplate: AvailabilityTemplates;

  AvailabilityTemplateId: string;

  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  FinishTime: number;

  IsAvailable: boolean;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  StartTime: number;

  UID: string;

  Weekday: Weekday;
}

export interface AvailabilityTemplates {
  AvailabilityPattern?: Maybe<AvailabilityPatterns>;

  AvailabilityPatternId?: Maybe<string>;

  AvailabilityTemplateEntries: AvailabilityTemplateEntries[];

  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  Finish?: Maybe<LocalDate>;

  Global: boolean;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  Resources: AvailabilityTemplateResources[];

  Start?: Maybe<LocalDate>;

  UID: string;
}

export interface AvailabilityTemplateResources {
  AvailabilityTemplate: AvailabilityTemplates;

  AvailabilityTemplateId: string;

  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Migrated: boolean;

  Resource: Resources;

  ResourceId: string;

  UID: string;
}

export interface AvailabilityTemplateResourcesConnection {
  edges: AvailabilityTemplateResourcesEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface AvailabilityTemplateResourcesEdge {
  cursor: string;

  node: AvailabilityTemplateResources;

  offset: number;
}

export interface AvailabilityTemplatesConnection {
  edges: AvailabilityTemplatesEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface AvailabilityTemplatesEdge {
  cursor: string;

  node: AvailabilityTemplates;

  offset: number;
}

export interface ClientAvailabilitiesConnection {
  edges: ClientAvailabilitiesEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface ClientAvailabilitiesEdge {
  cursor: string;

  node: ClientAvailabilities;

  offset: number;
}

export interface ContactTagsConnection {
  edges: ContactTagsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface ContactTagsEdge {
  cursor: string;

  node: ContactTags;

  offset: number;
}

export interface ContactsConnection {
  edges: ContactsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface ContactsEdge {
  cursor: string;

  node: Contacts;

  offset: number;
}

export interface EduMeSettingsConnection {
  edges: EduMeSettingsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface EduMeSettingsEdge {
  cursor: string;

  node: EduMeSettings;

  offset: number;
}

export interface EduMeSettings {
  ApiKey?: Maybe<string>;

  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name?: Maybe<string>;

  UID: string;
}

export interface ErrorLogsConnection {
  edges: ErrorLogsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface ErrorLogsEdge {
  cursor: string;

  node: ErrorLogs;

  offset: number;
}

export interface ErrorLogs {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Log?: Maybe<string>;

  Name?: Maybe<string>;

  Payload?: Maybe<string>;

  UID: string;
}

export interface HolidayRegionsConnection {
  edges: HolidayRegionsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface HolidayRegionsEdge {
  cursor: string;

  node: HolidayRegions;

  offset: number;
}

export interface HolidayRegions {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  Holiday: Holidays;

  HolidayId: string;

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Region: Regions;

  RegionId: string;

  UID: string;
}

export interface Holidays {
  CreatedBy: Users;

  CreatedById: string;

  CreatedDate: string;

  EndDate: LocalDate;

  Global: boolean;

  HolidayRegions: HolidayRegions[];

  LastModifiedBy: Users;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  StartDate: LocalDate;

  UID: string;
}

export interface HolidaysConnection {
  edges: HolidaysEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface HolidaysEdge {
  cursor: string;

  node: Holidays;

  offset: number;
}

export interface JobAllocationsConnection {
  edges: JobAllocationsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface JobAllocationsEdge {
  cursor: string;

  node: JobAllocations;

  offset: number;
}

export interface JobDependenciesConnection {
  edges: JobDependenciesEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface JobDependenciesEdge {
  cursor: string;

  node: JobDependencies;

  offset: number;
}

export interface JobOffersConnection {
  edges: JobOffersEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface JobOffersEdge {
  cursor: string;

  node: JobOffers;

  offset: number;
}

export interface JobProductsConnection {
  edges: JobProductsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface JobProductsEdge {
  cursor: string;

  node: JobProducts;

  offset: number;
}

export interface JobTagsConnection {
  edges: JobTagsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface JobTagsEdge {
  cursor: string;

  node: JobTags;

  offset: number;
}

export interface JobTasksConnection {
  edges: JobTasksEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface JobTasksEdge {
  cursor: string;

  node: JobTasks;

  offset: number;
}

export interface JobTimeConstraintsConnection {
  edges: JobTimeConstraintsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface JobTimeConstraintsEdge {
  cursor: string;

  node: JobTimeConstraints;

  offset: number;
}

export interface JobsConnection {
  edges: JobsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface JobsEdge {
  cursor: string;

  node: Jobs;

  offset: number;
}

export interface LocationResourceScoresConnection {
  edges: LocationResourceScoresEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface LocationResourceScoresEdge {
  cursor: string;

  node: LocationResourceScores;

  offset: number;
}

export interface LocationsConnection {
  edges: LocationsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface LocationsEdge {
  cursor: string;

  node: Locations;

  offset: number;
}

export interface ProductsConnection {
  edges: ProductsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface ProductsEdge {
  cursor: string;

  node: Products;

  offset: number;
}

export interface RecurringSchedulesConnection {
  edges: RecurringSchedulesEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface RecurringSchedulesEdge {
  cursor: string;

  node: RecurringSchedules;

  offset: number;
}

export interface RegionsConnection {
  edges: RegionsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface RegionsEdge {
  cursor: string;

  node: Regions;

  offset: number;
}

export interface ResourceJobOffersConnection {
  edges: ResourceJobOffersEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface ResourceJobOffersEdge {
  cursor: string;

  node: ResourceJobOffers;

  offset: number;
}

export interface ResourceOverrideRegionsConnection {
  edges: ResourceOverrideRegionsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface ResourceOverrideRegionsEdge {
  cursor: string;

  node: ResourceOverrideRegions;

  offset: number;
}

export interface ResourceOverridesConnection {
  edges: ResourceOverridesEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface ResourceOverridesEdge {
  cursor: string;

  node: ResourceOverrides;

  offset: number;
}

export interface ResourceRegionsConnection {
  edges: ResourceRegionsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface ResourceRegionsEdge {
  cursor: string;

  node: ResourceRegions;

  offset: number;
}

export interface ResourceRequirementTagsConnection {
  edges: ResourceRequirementTagsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface ResourceRequirementTagsEdge {
  cursor: string;

  node: ResourceRequirementTags;

  offset: number;
}

export interface ResourceRequirementsConnection {
  edges: ResourceRequirementsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface ResourceRequirementsEdge {
  cursor: string;

  node: ResourceRequirements;

  offset: number;
}

export interface ResourceShiftBreaksConnection {
  edges: ResourceShiftBreaksEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface ResourceShiftBreaksEdge {
  cursor: string;

  node: ResourceShiftBreaks;

  offset: number;
}

export interface ResourceShiftOffersConnection {
  edges: ResourceShiftOffersEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface ResourceShiftOffersEdge {
  cursor: string;

  node: ResourceShiftOffers;

  offset: number;
}

export interface ResourceShiftsConnection {
  edges: ResourceShiftsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface ResourceShiftsEdge {
  cursor: string;

  node: ResourceShifts;

  offset: number;
}

export interface ResourceTagsConnection {
  edges: ResourceTagsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface ResourceTagsEdge {
  cursor: string;

  node: ResourceTags;

  offset: number;
}

export interface ResourcesConnection {
  edges: ResourcesEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface ResourcesEdge {
  cursor: string;

  node: Resources;

  offset: number;
}

export interface ScheduleTemplatesConnection {
  edges: ScheduleTemplatesEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface ScheduleTemplatesEdge {
  cursor: string;

  node: ScheduleTemplates;

  offset: number;
}

export interface ShiftOfferShiftsConnection {
  edges: ShiftOfferShiftsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface ShiftOfferShiftsEdge {
  cursor: string;

  node: ShiftOfferShifts;

  offset: number;
}

export interface ShiftOffersConnection {
  edges: ShiftOffersEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface ShiftOffersEdge {
  cursor: string;

  node: ShiftOffers;

  offset: number;
}

export interface ShiftTagsConnection {
  edges: ShiftTagsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface ShiftTagsEdge {
  cursor: string;

  node: ShiftTags;

  offset: number;
}

export interface ShiftsConnection {
  edges: ShiftsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface ShiftsEdge {
  cursor: string;

  node: Shifts;

  offset: number;
}

export interface TagsConnection {
  edges: TagsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface TagsEdge {
  cursor: string;

  node: Tags;

  offset: number;
}

export interface TemplatedActivitiesConnection {
  edges: TemplatedActivitiesEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface TemplatedActivitiesEdge {
  cursor: string;

  node: TemplatedActivities;

  offset: number;
}

export interface TemplatedActivityResourcesConnection {
  edges: TemplatedActivityResourcesEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface TemplatedActivityResourcesEdge {
  cursor: string;

  node: TemplatedActivityResources;

  offset: number;
}

export interface TemplatedAttendeesConnection {
  edges: TemplatedAttendeesEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface TemplatedAttendeesEdge {
  cursor: string;

  node: TemplatedAttendees;

  offset: number;
}

export interface TemplatedJobAllocationsConnection {
  edges: TemplatedJobAllocationsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface TemplatedJobAllocationsEdge {
  cursor: string;

  node: TemplatedJobAllocations;

  offset: number;
}

export interface TemplatedJobDependenciesConnection {
  edges: TemplatedJobDependenciesEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface TemplatedJobDependenciesEdge {
  cursor: string;

  node: TemplatedJobDependencies;

  offset: number;
}

export interface TemplatedJobProductsConnection {
  edges: TemplatedJobProductsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface TemplatedJobProductsEdge {
  cursor: string;

  node: TemplatedJobProducts;

  offset: number;
}

export interface TemplatedJobTagsConnection {
  edges: TemplatedJobTagsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface TemplatedJobTagsEdge {
  cursor: string;

  node: TemplatedJobTags;

  offset: number;
}

export interface TemplatedJobTasksConnection {
  edges: TemplatedJobTasksEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface TemplatedJobTasksEdge {
  cursor: string;

  node: TemplatedJobTasks;

  offset: number;
}

export interface TemplatedJobTimeConstraintsConnection {
  edges: TemplatedJobTimeConstraintsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface TemplatedJobTimeConstraintsEdge {
  cursor: string;

  node: TemplatedJobTimeConstraints;

  offset: number;
}

export interface TemplatedJobsConnection {
  edges: TemplatedJobsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface TemplatedJobsEdge {
  cursor: string;

  node: TemplatedJobs;

  offset: number;
}

export interface TemplatedResourceRequirementTagsConnection {
  edges: TemplatedResourceRequirementTagsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface TemplatedResourceRequirementTagsEdge {
  cursor: string;

  node: TemplatedResourceRequirementTags;

  offset: number;
}

export interface TemplatedResourceRequirementsConnection {
  edges: TemplatedResourceRequirementsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface TemplatedResourceRequirementsEdge {
  cursor: string;

  node: TemplatedResourceRequirements;

  offset: number;
}

export interface TemplatedResourceShiftsConnection {
  edges: TemplatedResourceShiftsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface TemplatedResourceShiftsEdge {
  cursor: string;

  node: TemplatedResourceShifts;

  offset: number;
}

export interface TemplatedShiftTagsConnection {
  edges: TemplatedShiftTagsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface TemplatedShiftTagsEdge {
  cursor: string;

  node: TemplatedShiftTags;

  offset: number;
}

export interface TemplatedShiftsConnection {
  edges: TemplatedShiftsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface TemplatedShiftsEdge {
  cursor: string;

  node: TemplatedShifts;

  offset: number;
}

export interface UserRegionsConnection {
  edges: UserRegionsEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface UserRegionsEdge {
  cursor: string;

  node: UserRegions;

  offset: number;
}

export interface UsersConnection {
  edges: UsersEdge[];

  pageInfo: PageInfo;

  totalCount: number;
}

export interface UsersEdge {
  cursor: string;

  node: Users;

  offset: number;
}

/** Notification that links to the actual object the notification refers to. See the `notifications` query for an example on how to use this type in a query. */
export interface Notifications {
  /** Creation time as a UTC timestamp */
  Timestamp: string;
  /** Name of the action that triggered the notification */
  Action: string;
  /** Object the notification refers to as a union type */
  Object: NotificationsObject;
}

export interface Mutation {
  schema: SchemaMutation;
}

export interface SchemaMutation {
  deleteAccountResourceScores?: Maybe<string>;

  deleteAccountTags?: Maybe<string>;

  deleteAccounts?: Maybe<string>;

  deleteActivities?: Maybe<string>;

  deleteActivityResources?: Maybe<string>;

  deleteAttendees?: Maybe<string>;

  deleteAvailabilities?: Maybe<string>;

  deleteAvailabilityPatternResources?: Maybe<string>;

  deleteAvailabilityPatterns?: Maybe<string>;

  deleteAvailabilityTemplateEntries?: Maybe<string>;

  deleteAvailabilityTemplateResources?: Maybe<string>;

  deleteAvailabilityTemplates?: Maybe<string>;

  deleteClientAvailabilities?: Maybe<string>;

  deleteContactTags?: Maybe<string>;

  deleteContacts?: Maybe<string>;

  deleteEduMeSettings?: Maybe<string>;

  deleteErrorLogs?: Maybe<string>;

  deleteHolidayRegions?: Maybe<string>;

  deleteHolidays?: Maybe<string>;

  deleteJobAllocations?: Maybe<string>;

  deleteJobDependencies?: Maybe<string>;

  deleteJobOffers?: Maybe<string>;

  deleteJobProducts?: Maybe<string>;

  deleteJobTags?: Maybe<string>;

  deleteJobTasks?: Maybe<string>;

  deleteJobTimeConstraints?: Maybe<string>;

  deleteJobs?: Maybe<string>;

  deleteLocationResourceScores?: Maybe<string>;

  deleteLocations?: Maybe<string>;

  deleteProducts?: Maybe<string>;

  deleteRecurringSchedules?: Maybe<string>;

  deleteRegions?: Maybe<string>;

  deleteResourceJobOffers?: Maybe<string>;

  deleteResourceOverrideRegions?: Maybe<string>;

  deleteResourceOverrides?: Maybe<string>;

  deleteResourceRegions?: Maybe<string>;

  deleteResourceRequirementTags?: Maybe<string>;

  deleteResourceRequirements?: Maybe<string>;

  deleteResourceShiftBreaks?: Maybe<string>;

  deleteResourceShiftOffers?: Maybe<string>;

  deleteResourceShifts?: Maybe<string>;

  deleteResourceTags?: Maybe<string>;

  deleteResources?: Maybe<string>;

  deleteScheduleTemplates?: Maybe<string>;

  deleteShiftOfferShifts?: Maybe<string>;

  deleteShiftOffers?: Maybe<string>;

  deleteShiftTags?: Maybe<string>;

  deleteShifts?: Maybe<string>;

  deleteTags?: Maybe<string>;

  deleteTemplatedActivities?: Maybe<string>;

  deleteTemplatedActivityResources?: Maybe<string>;

  deleteTemplatedAttendees?: Maybe<string>;

  deleteTemplatedJobAllocations?: Maybe<string>;

  deleteTemplatedJobDependencies?: Maybe<string>;

  deleteTemplatedJobProducts?: Maybe<string>;

  deleteTemplatedJobTags?: Maybe<string>;

  deleteTemplatedJobTasks?: Maybe<string>;

  deleteTemplatedJobTimeConstraints?: Maybe<string>;

  deleteTemplatedJobs?: Maybe<string>;

  deleteTemplatedResourceRequirementTags?: Maybe<string>;

  deleteTemplatedResourceRequirements?: Maybe<string>;

  deleteTemplatedResourceShifts?: Maybe<string>;

  deleteTemplatedShiftTags?: Maybe<string>;

  deleteTemplatedShifts?: Maybe<string>;

  deleteUserRegions?: Maybe<string>;

  getAccountResourceScores: SimpleAccountResourceScores;

  getAccountTags: SimpleAccountTags;

  getAccounts: SimpleAccounts;

  getActivities: SimpleActivities;

  getActivityResources: SimpleActivityResources;

  getAttendees: SimpleAttendees;

  getAvailabilities: SimpleAvailabilities;

  getAvailabilityPatternResources: SimpleAvailabilityPatternResources;

  getAvailabilityPatterns: SimpleAvailabilityPatterns;

  getAvailabilityTemplateEntries: SimpleAvailabilityTemplateEntries;

  getAvailabilityTemplateResources: SimpleAvailabilityTemplateResources;

  getAvailabilityTemplates: SimpleAvailabilityTemplates;

  getClientAvailabilities: SimpleClientAvailabilities;

  getContactTags: SimpleContactTags;

  getContacts: SimpleContacts;

  getEduMeSettings: SimpleEduMeSettings;

  getErrorLogs: SimpleErrorLogs;

  getHolidayRegions: SimpleHolidayRegions;

  getHolidays: SimpleHolidays;

  getJobAllocations: SimpleJobAllocations;

  getJobDependencies: SimpleJobDependencies;

  getJobOffers: SimpleJobOffers;

  getJobProducts: SimpleJobProducts;

  getJobTags: SimpleJobTags;

  getJobTasks: SimpleJobTasks;

  getJobTimeConstraints: SimpleJobTimeConstraints;

  getJobs: SimpleJobs;

  getLocationResourceScores: SimpleLocationResourceScores;

  getLocations: SimpleLocations;

  getProducts: SimpleProducts;

  getRecurringSchedules: SimpleRecurringSchedules;

  getRegions: SimpleRegions;

  getResourceJobOffers: SimpleResourceJobOffers;

  getResourceOverrideRegions: SimpleResourceOverrideRegions;

  getResourceOverrides: SimpleResourceOverrides;

  getResourceRegions: SimpleResourceRegions;

  getResourceRequirementTags: SimpleResourceRequirementTags;

  getResourceRequirements: SimpleResourceRequirements;

  getResourceShiftBreaks: SimpleResourceShiftBreaks;

  getResourceShiftOffers: SimpleResourceShiftOffers;

  getResourceShifts: SimpleResourceShifts;

  getResourceTags: SimpleResourceTags;

  getResources: SimpleResources;

  getScheduleTemplates: SimpleScheduleTemplates;

  getShiftOfferShifts: SimpleShiftOfferShifts;

  getShiftOffers: SimpleShiftOffers;

  getShiftTags: SimpleShiftTags;

  getShifts: SimpleShifts;

  getTags: SimpleTags;

  getTemplatedActivities: SimpleTemplatedActivities;

  getTemplatedActivityResources: SimpleTemplatedActivityResources;

  getTemplatedAttendees: SimpleTemplatedAttendees;

  getTemplatedJobAllocations: SimpleTemplatedJobAllocations;

  getTemplatedJobDependencies: SimpleTemplatedJobDependencies;

  getTemplatedJobProducts: SimpleTemplatedJobProducts;

  getTemplatedJobTags: SimpleTemplatedJobTags;

  getTemplatedJobTasks: SimpleTemplatedJobTasks;

  getTemplatedJobTimeConstraints: SimpleTemplatedJobTimeConstraints;

  getTemplatedJobs: SimpleTemplatedJobs;

  getTemplatedResourceRequirementTags: SimpleTemplatedResourceRequirementTags;

  getTemplatedResourceRequirements: SimpleTemplatedResourceRequirements;

  getTemplatedResourceShifts: SimpleTemplatedResourceShifts;

  getTemplatedShiftTags: SimpleTemplatedShiftTags;

  getTemplatedShifts: SimpleTemplatedShifts;

  getUserRegions: SimpleUserRegions;

  insertAccountResourceScores: string;

  insertAccountTags: string;

  insertAccounts: string;

  insertActivities: string;

  insertActivityResources: string;

  insertAttendees: string;

  insertAvailabilities: string;

  insertAvailabilityPatternResources: string;

  insertAvailabilityPatterns: string;

  insertAvailabilityTemplateEntries: string;

  insertAvailabilityTemplateResources: string;

  insertAvailabilityTemplates: string;

  insertClientAvailabilities: string;

  insertContactTags: string;

  insertContacts: string;

  insertEduMeSettings: string;

  insertErrorLogs: string;

  insertHolidayRegions: string;

  insertHolidays: string;

  insertJobAllocations: string;

  insertJobDependencies: string;

  insertJobOffers: string;

  insertJobProducts: string;

  insertJobTags: string;

  insertJobTasks: string;

  insertJobTimeConstraints: string;

  insertJobs: string;

  insertLocationResourceScores: string;

  insertLocations: string;

  insertProducts: string;

  insertRecurringSchedules: string;

  insertRegions: string;

  insertResourceJobOffers: string;

  insertResourceOverrideRegions: string;

  insertResourceOverrides: string;

  insertResourceRegions: string;

  insertResourceRequirementTags: string;

  insertResourceRequirements: string;

  insertResourceShiftBreaks: string;

  insertResourceShiftOffers: string;

  insertResourceShifts: string;

  insertResourceTags: string;

  insertResources: string;

  insertScheduleTemplates: string;

  insertShiftOfferShifts: string;

  insertShiftOffers: string;

  insertShiftTags: string;

  insertShifts: string;

  insertTags: string;

  insertTemplatedActivities: string;

  insertTemplatedActivityResources: string;

  insertTemplatedAttendees: string;

  insertTemplatedJobAllocations: string;

  insertTemplatedJobDependencies: string;

  insertTemplatedJobProducts: string;

  insertTemplatedJobTags: string;

  insertTemplatedJobTasks: string;

  insertTemplatedJobTimeConstraints: string;

  insertTemplatedJobs: string;

  insertTemplatedResourceRequirementTags: string;

  insertTemplatedResourceRequirements: string;

  insertTemplatedResourceShifts: string;

  insertTemplatedShiftTags: string;

  insertTemplatedShifts: string;

  insertUserRegions: string;

  updateAccountResourceScores: string;

  updateAccountTags: string;

  updateAccounts: string;

  updateActivities: string;

  updateActivityResources: string;

  updateAttendees: string;

  updateAvailabilities: string;

  updateAvailabilityPatternResources: string;

  updateAvailabilityPatterns: string;

  updateAvailabilityTemplateEntries: string;

  updateAvailabilityTemplateResources: string;

  updateAvailabilityTemplates: string;

  updateClientAvailabilities: string;

  updateContactTags: string;

  updateContacts: string;

  updateEduMeSettings: string;

  updateErrorLogs: string;

  updateHolidayRegions: string;

  updateHolidays: string;

  updateJobAllocations: string;

  updateJobDependencies: string;

  updateJobOffers: string;

  updateJobProducts: string;

  updateJobTags: string;

  updateJobTasks: string;

  updateJobTimeConstraints: string;

  updateJobs: string;

  updateLocationResourceScores: string;

  updateLocations: string;

  updateProducts: string;

  updateRecurringSchedules: string;

  updateRegions: string;

  updateResourceJobOffers: string;

  updateResourceOverrideRegions: string;

  updateResourceOverrides: string;

  updateResourceRegions: string;

  updateResourceRequirementTags: string;

  updateResourceRequirements: string;

  updateResourceShiftBreaks: string;

  updateResourceShiftOffers: string;

  updateResourceShifts: string;

  updateResourceTags: string;

  updateResources: string;

  updateScheduleTemplates: string;

  updateShiftOfferShifts: string;

  updateShiftOffers: string;

  updateShiftTags: string;

  updateShifts: string;

  updateTags: string;

  updateTemplatedActivities: string;

  updateTemplatedActivityResources: string;

  updateTemplatedAttendees: string;

  updateTemplatedJobAllocations: string;

  updateTemplatedJobDependencies: string;

  updateTemplatedJobProducts: string;

  updateTemplatedJobTags: string;

  updateTemplatedJobTasks: string;

  updateTemplatedJobTimeConstraints: string;

  updateTemplatedJobs: string;

  updateTemplatedResourceRequirementTags: string;

  updateTemplatedResourceRequirements: string;

  updateTemplatedResourceShifts: string;

  updateTemplatedShiftTags: string;

  updateTemplatedShifts: string;

  updateUserRegions: string;

  upsertAccountResourceScores: string;

  upsertAccountTags: string;

  upsertAccounts: string;

  upsertActivities: string;

  upsertActivityResources: string;

  upsertAttendees: string;

  upsertAvailabilities: string;

  upsertAvailabilityPatternResources: string;

  upsertAvailabilityPatterns: string;

  upsertAvailabilityTemplateEntries: string;

  upsertAvailabilityTemplateResources: string;

  upsertAvailabilityTemplates: string;

  upsertClientAvailabilities: string;

  upsertContactTags: string;

  upsertContacts: string;

  upsertEduMeSettings: string;

  upsertErrorLogs: string;

  upsertHolidayRegions: string;

  upsertHolidays: string;

  upsertJobAllocations: string;

  upsertJobDependencies: string;

  upsertJobOffers: string;

  upsertJobProducts: string;

  upsertJobTags: string;

  upsertJobTasks: string;

  upsertJobTimeConstraints: string;

  upsertJobs: string;

  upsertLocationResourceScores: string;

  upsertLocations: string;

  upsertProducts: string;

  upsertRecurringSchedules: string;

  upsertRegions: string;

  upsertResourceJobOffers: string;

  upsertResourceOverrideRegions: string;

  upsertResourceOverrides: string;

  upsertResourceRegions: string;

  upsertResourceRequirementTags: string;

  upsertResourceRequirements: string;

  upsertResourceShiftBreaks: string;

  upsertResourceShiftOffers: string;

  upsertResourceShifts: string;

  upsertResourceTags: string;

  upsertResources: string;

  upsertScheduleTemplates: string;

  upsertShiftOfferShifts: string;

  upsertShiftOffers: string;

  upsertShiftTags: string;

  upsertShifts: string;

  upsertTags: string;

  upsertTemplatedActivities: string;

  upsertTemplatedActivityResources: string;

  upsertTemplatedAttendees: string;

  upsertTemplatedJobAllocations: string;

  upsertTemplatedJobDependencies: string;

  upsertTemplatedJobProducts: string;

  upsertTemplatedJobTags: string;

  upsertTemplatedJobTasks: string;

  upsertTemplatedJobTimeConstraints: string;

  upsertTemplatedJobs: string;

  upsertTemplatedResourceRequirementTags: string;

  upsertTemplatedResourceRequirements: string;

  upsertTemplatedResourceShifts: string;

  upsertTemplatedShiftTags: string;

  upsertTemplatedShifts: string;

  upsertUserRegions: string;
}

export interface SimpleAccountResourceScores {
  AccountId: string;

  Blacklisted: boolean;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  ResourceId: string;

  UID: string;

  Whitelisted: boolean;
}

export interface SimpleAccountTags {
  AccountId: string;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Required: boolean;

  TagId: string;

  UID: string;

  Weighting?: Maybe<number>;
}

export interface SimpleAccounts {
  BillingCity?: Maybe<string>;

  BillingPostalCode?: Maybe<string>;

  BillingState?: Maybe<string>;

  BillingStreet?: Maybe<string>;

  CreatedById: string;

  CreatedDate: string;

  Fax?: Maybe<string>;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  Phone?: Maybe<string>;

  Rank?: Maybe<number>;

  RequiresWhitelist: boolean;

  ShippingCity?: Maybe<string>;

  ShippingPostalCode?: Maybe<string>;

  ShippingState?: Maybe<string>;

  ShippingStreet?: Maybe<string>;

  UID: string;
}

export interface SimpleActivities {
  Address?: Maybe<string>;

  CopiedFromId?: Maybe<string>;

  CreatedById: string;

  CreatedDate: string;

  End: string;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  LastModifiedById: string;

  LastModifiedDate: string;

  LocationId?: Maybe<string>;

  Name: string;

  Notes?: Maybe<string>;

  Quantity?: Maybe<number>;

  ResourceId?: Maybe<string>;

  ScheduleTemplateId?: Maybe<string>;

  Start: string;

  TemplatedActivityId?: Maybe<string>;

  Timezone?: Maybe<string>;

  Type?: Maybe<string>;

  UID: string;
}

export interface SimpleActivityResources {
  ActivityId: string;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  ResourceId: string;

  UID: string;
}

export interface SimpleAttendees {
  CancelReason?: Maybe<string>;

  ContactId: string;

  CreatedById: string;

  CreatedDate: string;

  JobId: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Status: AttendeeStatus;

  TimeCancelled?: Maybe<string>;

  UID: string;
}

export interface SimpleAvailabilities {
  CreatedById: string;

  CreatedDate: string;

  Finish: string;

  IsAvailable: boolean;

  LastModifiedById: string;

  LastModifiedDate: string;

  Notes?: Maybe<string>;

  ResourceId: string;

  Start: string;

  Status?: Maybe<AvailabilityStatus>;

  Type?: Maybe<string>;

  UID: string;
}

export interface SimpleAvailabilityPatternResources {
  AvailabilityPatternId: string;

  CreatedById: string;

  CreatedDate: string;

  End?: Maybe<string>;

  LastModifiedById: string;

  LastModifiedDate: string;

  ResourceId: string;

  Start: string;

  Status?: Maybe<AvailabilityStatus>;

  UID: string;
}

export interface SimpleAvailabilityPatterns {
  CreatedById: string;

  CreatedDate: string;

  Description?: Maybe<string>;

  Hash: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  Pattern: string;

  UID: string;
}

export interface SimpleAvailabilityTemplateEntries {
  AvailabilityTemplateId: string;

  CreatedById: string;

  CreatedDate: string;

  FinishTime: number;

  IsAvailable: boolean;

  LastModifiedById: string;

  LastModifiedDate: string;

  StartTime: number;

  UID: string;

  Weekday: Weekday;
}

export interface SimpleAvailabilityTemplateResources {
  AvailabilityTemplateId: string;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Migrated: boolean;

  ResourceId: string;

  UID: string;
}

export interface SimpleAvailabilityTemplates {
  AvailabilityPatternId?: Maybe<string>;

  CreatedById: string;

  CreatedDate: string;

  Finish?: Maybe<LocalDate>;

  Global: boolean;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  Start?: Maybe<LocalDate>;

  UID: string;
}

export interface SimpleClientAvailabilities {
  AccountId?: Maybe<string>;

  ContactId?: Maybe<string>;

  CreatedById: string;

  CreatedDate: string;

  End: string;

  IsAvailable: boolean;

  LastModifiedById: string;

  LastModifiedDate: string;

  PreferredEnd?: Maybe<string>;

  PreferredStart?: Maybe<string>;

  RecurringScheduleId?: Maybe<string>;

  Start: string;

  UID: string;
}

export interface SimpleContactTags {
  ContactId: string;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Required: boolean;

  TagId: string;

  UID: string;

  Weighting?: Maybe<number>;
}

export interface SimpleContacts {
  AccountId?: Maybe<string>;

  CreatedById: string;

  CreatedDate: string;

  Email?: Maybe<string>;

  FirstName?: Maybe<string>;

  FullName: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  LastName: string;

  MailingCity?: Maybe<string>;

  MailingPostalCode?: Maybe<string>;

  MailingState?: Maybe<string>;

  MailingStreet?: Maybe<string>;

  MobilePhone?: Maybe<string>;

  OtherCity?: Maybe<string>;

  OtherPostalCode?: Maybe<string>;

  OtherState?: Maybe<string>;

  OtherStreet?: Maybe<string>;

  Phone?: Maybe<string>;

  RegionId?: Maybe<string>;

  Title?: Maybe<string>;

  UID: string;
}

export interface SimpleEduMeSettings {
  ApiKey?: Maybe<string>;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name?: Maybe<string>;

  UID: string;
}

export interface SimpleErrorLogs {
  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Log?: Maybe<string>;

  Name?: Maybe<string>;

  Payload?: Maybe<string>;

  UID: string;
}

export interface SimpleHolidayRegions {
  CreatedById: string;

  CreatedDate: string;

  HolidayId: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  RegionId: string;

  UID: string;
}

export interface SimpleHolidays {
  CreatedById: string;

  CreatedDate: string;

  EndDate: LocalDate;

  Global: boolean;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  StartDate: LocalDate;

  UID: string;
}

export interface SimpleJobAllocations {
  CreatedById: string;

  CreatedDate: string;

  DeclineDescription?: Maybe<string>;

  DeclineReason?: Maybe<string>;

  Duration?: Maybe<number>;

  End?: Maybe<string>;

  EstimatedTravelDistance?: Maybe<number>;

  EstimatedTravelTime?: Maybe<number>;

  GeoCheckedInLatitude?: Maybe<number>;

  GeoCheckedInLongitude?: Maybe<number>;

  GeoCompletedLatitude?: Maybe<number>;

  GeoCompletedLongitude?: Maybe<number>;

  GeoInProgressLatitude?: Maybe<number>;

  GeoInProgressLongitude?: Maybe<number>;

  GeoStartTravelLatitude?: Maybe<number>;

  GeoStartTravelLongitude?: Maybe<number>;

  JobId: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  NotificationType?: Maybe<string>;

  PhoneResponse?: Maybe<string>;

  ResourceId: string;

  ResourceRequirementId?: Maybe<string>;

  Start?: Maybe<string>;

  Status: JobAllocationStatus;

  TeamLeader: boolean;

  TimeCheckedIn?: Maybe<string>;

  TimeCompleted?: Maybe<string>;

  TimeInProgress?: Maybe<string>;

  TimePublished?: Maybe<string>;

  TimeResponded?: Maybe<string>;

  TimeStartTravel?: Maybe<string>;

  TravelDistance?: Maybe<number>;

  TravelTime?: Maybe<number>;

  UID: string;
}

export interface SimpleJobDependencies {
  CreatedById: string;

  CreatedDate: string;

  FromAnchor: JobDependencyAnchor;

  FromJobId: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  ToAnchor: JobDependencyAnchor;

  ToAnchorMaxOffsetMinutes?: Maybe<number>;

  ToAnchorMinOffsetMinutes?: Maybe<number>;

  ToJobId: string;

  UID: string;
}

export interface SimpleJobOffers {
  CreatedById: string;

  CreatedByResource: boolean;

  CreatedDate: string;

  JobId: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  ResourceRequirementId?: Maybe<string>;

  Status: OfferStatus;

  UID: string;
}

export interface SimpleJobProducts {
  CreatedById: string;

  CreatedDate: string;

  JobId: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  ProductId?: Maybe<string>;

  ProductName?: Maybe<string>;

  Qty: number;

  UID: string;
}

export interface SimpleJobTags {
  CreatedById: string;

  CreatedDate: string;

  JobId: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Required: boolean;

  TagId: string;

  UID: string;

  Weighting?: Maybe<number>;
}

export interface SimpleJobTasks {
  Completed: boolean;

  CreatedById: string;

  CreatedDate: string;

  Description?: Maybe<string>;

  JobId: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  Seq: number;

  UID: string;
}

export interface SimpleJobTimeConstraints {
  CreatedById: string;

  CreatedDate: string;

  EndBefore?: Maybe<string>;

  JobId: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Required: boolean;

  StartAfter?: Maybe<string>;

  StartBefore?: Maybe<string>;

  Type: JobTimeConstraintType;

  UID: string;
}

export interface SimpleJobs {
  AbortReason?: Maybe<string>;

  AccountId?: Maybe<string>;

  ActualEnd?: Maybe<string>;

  ActualStart?: Maybe<string>;

  Address?: Maybe<string>;

  AutoSchedule: boolean;

  CanBeDeclined: boolean;

  CompletionNotes?: Maybe<string>;

  ContactId?: Maybe<string>;

  CopiedFromId?: Maybe<string>;

  CreatedById: string;

  CreatedDate: string;

  CustomerConfirmationStatus?: Maybe<CustomerConfirmationStatus>;

  Description?: Maybe<string>;

  Duration: number;

  End?: Maybe<string>;

  EstimatedEnd?: Maybe<string>;

  EstimatedStart?: Maybe<string>;

  FollowupReason?: Maybe<string>;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  IsGroupEvent: boolean;

  JobAllocationCount: number;

  JobAllocationTimeSource: boolean;

  JobStatus: JobStatus;

  LastModifiedById: string;

  LastModifiedDate: string;

  LocationId?: Maybe<string>;

  Locked: boolean;

  MaxAttendees?: Maybe<number>;

  MinAttendees?: Maybe<number>;

  ModuleId?: Maybe<number>;

  Name: string;

  NotesComments?: Maybe<string>;

  NotifyBy?: Maybe<string>;

  NotifyPeriod?: Maybe<number>;

  ParentId?: Maybe<string>;

  Quantity?: Maybe<number>;

  RecurringScheduleId?: Maybe<string>;

  RegionId: string;

  ScheduleTemplateId?: Maybe<string>;

  Start?: Maybe<string>;

  TemplatedJobId?: Maybe<string>;

  Timezone: string;

  Type?: Maybe<string>;

  UID: string;

  Urgency?: Maybe<string>;

  VirtualMeetingId?: Maybe<string>;

  VirtualMeetingInfo?: Maybe<string>;

  VirtualMeetingURL?: Maybe<string>;
}

export interface SimpleLocationResourceScores {
  Blacklisted: boolean;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  LocationId: string;

  ResourceId: string;

  UID: string;

  Whitelisted: boolean;
}

export interface SimpleLocations {
  AccountId?: Maybe<string>;

  Address?: Maybe<string>;

  CreatedById: string;

  CreatedDate: string;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  RegionId?: Maybe<string>;

  RequiresWhitelist: boolean;

  Type?: Maybe<string>;

  UID: string;
}

export interface SimpleProducts {
  CreatedById: string;

  CreatedDate: string;

  Description?: Maybe<string>;

  Family?: Maybe<string>;

  IsActive: boolean;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  ProductCode?: Maybe<string>;

  UID: string;
}

export interface SimpleRecurringSchedules {
  AckAllJobs: boolean;

  CreatedById: string;

  CreatedDate: string;

  Description?: Maybe<string>;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  Pattern?: Maybe<string>;

  Summary?: Maybe<string>;

  UID: string;
}

export interface SimpleRegions {
  CountryCode?: Maybe<string>;

  CreatedById: string;

  CreatedDate: string;

  Description?: Maybe<string>;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  Radius?: Maybe<number>;

  Timezone: string;

  UID: string;
}

export interface SimpleResourceJobOffers {
  CreatedById: string;

  CreatedDate: string;

  JobOfferId: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  ResourceId: string;

  Response?: Maybe<OfferResponse>;

  Status: ResourceOfferStatus;

  TimeNotified?: Maybe<string>;

  TimeResponded?: Maybe<string>;

  UID: string;
}

export interface SimpleResourceOverrideRegions {
  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  RegionId: string;

  ResourceOverrideId: string;

  UID: string;
}

export interface SimpleResourceOverrides {
  CreatedById: string;

  CreatedDate: string;

  Description?: Maybe<string>;

  End: string;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  HomeAddress?: Maybe<string>;

  LastModifiedById: string;

  LastModifiedDate: string;

  ResourceId: string;

  Start: string;

  UID: string;
}

export interface SimpleResourceRegions {
  CreatedById: string;

  CreatedDate: string;

  End?: Maybe<string>;

  LastModifiedById: string;

  LastModifiedDate: string;

  RegionId: string;

  ResourceId: string;

  Start?: Maybe<string>;

  UID: string;
}

export interface SimpleResourceRequirementTags {
  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Required: boolean;

  ResourceRequirementId: string;

  TagId: string;

  UID: string;

  Weighting?: Maybe<number>;
}

export interface SimpleResourceRequirements {
  CreatedById: string;

  CreatedDate: string;

  Description?: Maybe<string>;

  Duration?: Maybe<number>;

  JobAllocationCount: number;

  JobAllocationTimeSource: boolean;

  JobId: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  Quantity: number;

  RelativeStart?: Maybe<number>;

  ScheduledEnd?: Maybe<string>;

  ScheduledStart?: Maybe<string>;

  Status: JobStatus;

  UID: string;
}

export interface SimpleResourceShiftBreaks {
  CreatedById: string;

  CreatedDate: string;

  End?: Maybe<string>;

  LastModifiedById: string;

  LastModifiedDate: string;

  ResourceShiftId: string;

  Start: string;

  UID: string;
}

export interface SimpleResourceShiftOffers {
  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  ResourceId: string;

  Response?: Maybe<OfferResponse>;

  ShiftOfferId: string;

  Status: ResourceOfferStatus;

  TimeNotified?: Maybe<string>;

  TimeResponded?: Maybe<string>;

  UID: string;
}

export interface SimpleResourceShifts {
  ActualEnd?: Maybe<string>;

  ActualStart?: Maybe<string>;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  ResourceId: string;

  ShiftId: string;

  UID: string;
}

export interface SimpleResourceTags {
  CreatedById: string;

  CreatedDate: string;

  ExpiryDate?: Maybe<string>;

  LastModifiedById: string;

  LastModifiedDate: string;

  ResourceId: string;

  TagId: string;

  UID: string;
}

export interface SimpleResources {
  Alias?: Maybe<string>;

  AutoSchedule: boolean;

  Category?: Maybe<string>;

  CountryCode?: Maybe<string>;

  CreatedById: string;

  CreatedDate: string;

  Email?: Maybe<string>;

  EmploymentType?: Maybe<string>;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  HomeAddress?: Maybe<string>;

  IsActive: boolean;

  LastModifiedById: string;

  LastModifiedDate: string;

  MobilePhone?: Maybe<string>;

  Name: string;

  Notes?: Maybe<string>;

  NotificationType?: Maybe<string>;

  PrimaryPhone?: Maybe<string>;

  PrimaryRegionId: string;

  Rating?: Maybe<number>;

  ResourceType?: Maybe<string>;

  TeamId?: Maybe<number>;

  UID: string;

  UserId?: Maybe<string>;

  WeeklyHours?: Maybe<number>;

  WorkingHourType?: Maybe<WorkingHourType>;
}

export interface SimpleScheduleTemplates {
  CreatedById: string;

  CreatedDate: string;

  DeletedById?: Maybe<string>;

  DeletedDate?: Maybe<string>;

  Description?: Maybe<string>;

  IsDeleted: boolean;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  PeriodDays?: Maybe<number>;

  UID: string;
}

export interface SimpleShiftOfferShifts {
  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  ShiftId: string;

  ShiftOfferId: string;

  UID: string;
}

export interface SimpleShiftOffers {
  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Status: OfferStatus;

  UID: string;
}

export interface SimpleShiftTags {
  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Required: boolean;

  ShiftId: string;

  TagId: string;

  UID: string;

  Weighting?: Maybe<number>;
}

export interface SimpleShifts {
  CopiedFromId?: Maybe<string>;

  CreatedById: string;

  CreatedDate: string;

  DisplayName?: Maybe<string>;

  Duration: number;

  End: string;

  IsDraft: boolean;

  LastModifiedById: string;

  LastModifiedDate: string;

  LocationId?: Maybe<string>;

  Name: string;

  RegionId?: Maybe<string>;

  ScheduleTemplateId?: Maybe<string>;

  Start: string;

  TemplatedShiftId?: Maybe<string>;

  UID: string;
}

export interface SimpleTags {
  Classification?: Maybe<TagClassification>;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  Type?: Maybe<string>;

  UID: string;
}

export interface SimpleTemplatedActivities {
  Address?: Maybe<string>;

  CreatedById: string;

  CreatedDate: string;

  Duration: number;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  LastModifiedById: string;

  LastModifiedDate: string;

  LocationId?: Maybe<string>;

  Notes?: Maybe<string>;

  Quantity?: Maybe<number>;

  ResourceId?: Maybe<string>;

  ScheduleTemplateId: string;

  StartOffsetDays: number;

  StartTimeOfDay: LocalTime;

  Timezone: string;

  Type?: Maybe<string>;

  UID: string;
}

export interface SimpleTemplatedActivityResources {
  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  ResourceId: string;

  TemplatedActivityId: string;

  UID: string;
}

export interface SimpleTemplatedAttendees {
  ContactId: string;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  TemplatedJobId: string;

  UID: string;
}

export interface SimpleTemplatedJobAllocations {
  CreatedById: string;

  CreatedDate: string;

  Duration?: Maybe<number>;

  LastModifiedById: string;

  LastModifiedDate: string;

  NotificationType?: Maybe<string>;

  ResourceId: string;

  StartOffsetDays?: Maybe<number>;

  StartTimeOfDay?: Maybe<LocalTime>;

  Status: JobAllocationStatus;

  TeamLeader: boolean;

  TemplatedJobId: string;

  TemplatedResourceRequirementId?: Maybe<string>;

  UID: string;
}

export interface SimpleTemplatedJobDependencies {
  CreatedById: string;

  CreatedDate: string;

  FromAnchor: JobDependencyAnchor;

  FromTemplatedJobId: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  ToAnchor: JobDependencyAnchor;

  ToAnchorMaxOffsetMinutes?: Maybe<number>;

  ToAnchorMinOffsetMinutes?: Maybe<number>;

  ToTemplatedJobId: string;

  UID: string;
}

export interface SimpleTemplatedJobProducts {
  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  ProductId?: Maybe<string>;

  Qty: number;

  TemplatedJobId: string;

  UID: string;
}

export interface SimpleTemplatedJobTags {
  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Required: boolean;

  TagId: string;

  TemplatedJobId: string;

  UID: string;

  Weighting?: Maybe<number>;
}

export interface SimpleTemplatedJobTasks {
  Completed: boolean;

  CreatedById: string;

  CreatedDate: string;

  Description?: Maybe<string>;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  Seq: number;

  TemplatedJobId: string;

  UID: string;
}

export interface SimpleTemplatedJobTimeConstraints {
  CreatedById: string;

  CreatedDate: string;

  EndBeforeOffsetDays?: Maybe<number>;

  EndBeforeTimeOfDay?: Maybe<LocalTime>;

  LastModifiedById: string;

  LastModifiedDate: string;

  Required: boolean;

  StartAfterOffsetDays?: Maybe<number>;

  StartAfterTimeOfDay?: Maybe<LocalTime>;

  StartBeforeOffsetDays?: Maybe<number>;

  StartBeforeTimeOfDay?: Maybe<LocalTime>;

  TemplatedJobId: string;

  Type: JobTimeConstraintType;

  UID: string;
}

export interface SimpleTemplatedJobs {
  AccountId?: Maybe<string>;

  Address?: Maybe<string>;

  AutoSchedule: boolean;

  CanBeDeclined: boolean;

  ContactId?: Maybe<string>;

  CreatedById: string;

  CreatedDate: string;

  CustomerConfirmationStatus?: Maybe<CustomerConfirmationStatus>;

  Description?: Maybe<string>;

  Duration: number;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  IsGroupEvent: boolean;

  JobAllocationTimeSource: boolean;

  LastModifiedById: string;

  LastModifiedDate: string;

  LocationId?: Maybe<string>;

  Locked: boolean;

  MaxAttendees?: Maybe<number>;

  MinAttendees?: Maybe<number>;

  NotesComments?: Maybe<string>;

  NotifyPeriod?: Maybe<number>;

  Quantity?: Maybe<number>;

  RegionId: string;

  ScheduleTemplateId: string;

  StartOffsetDays: number;

  StartTimeOfDay: LocalTime;

  Type?: Maybe<string>;

  UID: string;

  Urgency?: Maybe<string>;

  VirtualMeetingId?: Maybe<string>;

  VirtualMeetingInfo?: Maybe<string>;

  VirtualMeetingURL?: Maybe<string>;
}

export interface SimpleTemplatedResourceRequirementTags {
  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Required: boolean;

  TagId: string;

  TemplatedResourceRequirementId: string;

  UID: string;

  Weighting?: Maybe<number>;
}

export interface SimpleTemplatedResourceRequirements {
  CreatedById: string;

  CreatedDate: string;

  Description?: Maybe<string>;

  JobAllocationTimeSource: boolean;

  LastModifiedById: string;

  LastModifiedDate: string;

  Quantity: number;

  RelativeStart?: Maybe<number>;

  TemplatedJobId: string;

  UID: string;
}

export interface SimpleTemplatedResourceShifts {
  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  ResourceId: string;

  TemplatedShiftId: string;

  UID: string;
}

export interface SimpleTemplatedShiftTags {
  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Required: boolean;

  TagId: string;

  TemplatedShiftId: string;

  UID: string;

  Weighting?: Maybe<number>;
}

export interface SimpleTemplatedShifts {
  CreatedById: string;

  CreatedDate: string;

  DisplayName?: Maybe<string>;

  Duration: number;

  IsDraft: boolean;

  LastModifiedById: string;

  LastModifiedDate: string;

  LocationId?: Maybe<string>;

  RegionId: string;

  ScheduleTemplateId: string;

  StartOffsetDays: number;

  StartTimeOfDay: LocalTime;

  UID: string;
}

export interface SimpleUserRegions {
  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  RegionId: string;

  UID: string;

  UserId: string;
}

export interface Subscription {
  schemaJobProducts: SchemaSubscriptionNotificationJobProducts;

  schemaTemplatedJobs: SchemaSubscriptionNotificationTemplatedJobs;

  schemaTags: SchemaSubscriptionNotificationTags;

  schemaUserRegions: SchemaSubscriptionNotificationUserRegions;

  schemaResourceShifts: SchemaSubscriptionNotificationResourceShifts;

  schemaTemplatedShifts: SchemaSubscriptionNotificationTemplatedShifts;

  schemaJobAllocations: SchemaSubscriptionNotificationJobAllocations;

  schemaResourceOverrideRegions: SchemaSubscriptionNotificationResourceOverrideRegions;

  schemaJobs: SchemaSubscriptionNotificationJobs;

  schemaResourceOverrides: SchemaSubscriptionNotificationResourceOverrides;

  schemaEduMeSettings: SchemaSubscriptionNotificationEduMeSettings;

  schemaShiftOffers: SchemaSubscriptionNotificationShiftOffers;

  schemaRecurringSchedules: SchemaSubscriptionNotificationRecurringSchedules;

  schemaJobTags: SchemaSubscriptionNotificationJobTags;

  schemaActivities: SchemaSubscriptionNotificationActivities;

  schemaTemplatedResourceRequirements: SchemaSubscriptionNotificationTemplatedResourceRequirements;

  schemaTemplatedResourceRequirementTags: SchemaSubscriptionNotificationTemplatedResourceRequirementTags;

  schemaAvailabilityTemplateResources: SchemaSubscriptionNotificationAvailabilityTemplateResources;

  schemaActivityResources: SchemaSubscriptionNotificationActivityResources;

  schemaErrorLogs: SchemaSubscriptionNotificationErrorLogs;

  schemaResourceTags: SchemaSubscriptionNotificationResourceTags;

  schemaTemplatedActivities: SchemaSubscriptionNotificationTemplatedActivities;

  schemaJobTimeConstraints: SchemaSubscriptionNotificationJobTimeConstraints;

  schemaJobOffers: SchemaSubscriptionNotificationJobOffers;

  schemaAvailabilities: SchemaSubscriptionNotificationAvailabilities;

  schemaContactTags: SchemaSubscriptionNotificationContactTags;

  schemaClientAvailabilities: SchemaSubscriptionNotificationClientAvailabilities;

  schemaTemplatedJobAllocations: SchemaSubscriptionNotificationTemplatedJobAllocations;

  schemaAttendees: SchemaSubscriptionNotificationAttendees;

  schemaResourceRequirementTags: SchemaSubscriptionNotificationResourceRequirementTags;

  schemaShifts: SchemaSubscriptionNotificationShifts;

  schemaTemplatedActivityResources: SchemaSubscriptionNotificationTemplatedActivityResources;

  schemaTemplatedJobDependencies: SchemaSubscriptionNotificationTemplatedJobDependencies;

  schemaTemplatedJobProducts: SchemaSubscriptionNotificationTemplatedJobProducts;

  schemaShiftOfferShifts: SchemaSubscriptionNotificationShiftOfferShifts;

  schemaTemplatedJobTasks: SchemaSubscriptionNotificationTemplatedJobTasks;

  schemaTemplatedJobTags: SchemaSubscriptionNotificationTemplatedJobTags;

  schemaResourceShiftOffers: SchemaSubscriptionNotificationResourceShiftOffers;

  schemaShiftTags: SchemaSubscriptionNotificationShiftTags;

  schemaLocations: SchemaSubscriptionNotificationLocations;

  schemaTemplatedShiftTags: SchemaSubscriptionNotificationTemplatedShiftTags;

  schemaTemplatedJobTimeConstraints: SchemaSubscriptionNotificationTemplatedJobTimeConstraints;

  schemaResourceShiftBreaks: SchemaSubscriptionNotificationResourceShiftBreaks;

  schemaTemplatedAttendees: SchemaSubscriptionNotificationTemplatedAttendees;

  schemaAccountTags: SchemaSubscriptionNotificationAccountTags;

  schemaRegions: SchemaSubscriptionNotificationRegions;

  schemaJobDependencies: SchemaSubscriptionNotificationJobDependencies;

  schemaScheduleTemplates: SchemaSubscriptionNotificationScheduleTemplates;

  schemaUsers: SchemaSubscriptionNotificationUsers;

  schemaResources: SchemaSubscriptionNotificationResources;

  schemaHolidayRegions: SchemaSubscriptionNotificationHolidayRegions;

  schemaAvailabilityTemplates: SchemaSubscriptionNotificationAvailabilityTemplates;

  schemaResourceJobOffers: SchemaSubscriptionNotificationResourceJobOffers;

  schemaAccounts: SchemaSubscriptionNotificationAccounts;

  schemaTemplatedResourceShifts: SchemaSubscriptionNotificationTemplatedResourceShifts;

  schemaAvailabilityPatterns: SchemaSubscriptionNotificationAvailabilityPatterns;

  schemaAvailabilityPatternResources: SchemaSubscriptionNotificationAvailabilityPatternResources;

  schemaAvailabilityTemplateEntries: SchemaSubscriptionNotificationAvailabilityTemplateEntries;

  schemaAccountResourceScores: SchemaSubscriptionNotificationAccountResourceScores;

  schemaContacts: SchemaSubscriptionNotificationContacts;

  schemaProducts: SchemaSubscriptionNotificationProducts;

  schemaJobTasks: SchemaSubscriptionNotificationJobTasks;

  schemaHolidays: SchemaSubscriptionNotificationHolidays;

  schemaResourceRequirements: SchemaSubscriptionNotificationResourceRequirements;

  schemaLocationResourceScores: SchemaSubscriptionNotificationLocationResourceScores;

  schemaResourceRegions: SchemaSubscriptionNotificationResourceRegions;
}

export interface SchemaSubscriptionNotificationJobProducts
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionJobProducts;

  previous: SchemaSubscriptionJobProducts;
}

export interface SchemaSubscriptionJobProducts {
  CreatedById: string;

  CreatedDate: string;

  JobId: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  ProductId?: Maybe<string>;

  ProductName?: Maybe<string>;

  Qty: number;

  UID: string;
}

export interface SchemaSubscriptionNotificationTemplatedJobs
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionTemplatedJobs;

  previous: SchemaSubscriptionTemplatedJobs;
}

export interface SchemaSubscriptionTemplatedJobs {
  AccountId?: Maybe<string>;

  Address?: Maybe<string>;

  AutoSchedule: boolean;

  CanBeDeclined: boolean;

  ContactId?: Maybe<string>;

  CreatedById: string;

  CreatedDate: string;

  CustomerConfirmationStatus?: Maybe<string>;

  Description?: Maybe<string>;

  Duration: number;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  IsGroupEvent: boolean;

  JobAllocationTimeSource: boolean;

  LastModifiedById: string;

  LastModifiedDate: string;

  LocationId?: Maybe<string>;

  Locked: boolean;

  MaxAttendees?: Maybe<number>;

  MinAttendees?: Maybe<number>;

  NotesComments?: Maybe<string>;

  NotifyPeriod?: Maybe<number>;

  Quantity?: Maybe<number>;

  RegionId: string;

  ScheduleTemplateId: string;

  StartOffsetDays: number;

  StartTimeOfDay: LocalTime;

  Type?: Maybe<string>;

  UID: string;

  Urgency?: Maybe<string>;

  VirtualMeetingId?: Maybe<string>;

  VirtualMeetingInfo?: Maybe<string>;

  VirtualMeetingURL?: Maybe<string>;
}

export interface SchemaSubscriptionNotificationTags
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionTags;

  previous: SchemaSubscriptionTags;
}

export interface SchemaSubscriptionTags {
  Classification?: Maybe<string>;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  Type?: Maybe<string>;

  UID: string;
}

export interface SchemaSubscriptionNotificationUserRegions
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionUserRegions;

  previous: SchemaSubscriptionUserRegions;
}

export interface SchemaSubscriptionUserRegions {
  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  RegionId: string;

  UID: string;

  UserId: string;
}

export interface SchemaSubscriptionNotificationResourceShifts
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionResourceShifts;

  previous: SchemaSubscriptionResourceShifts;
}

export interface SchemaSubscriptionResourceShifts {
  ActualEnd?: Maybe<string>;

  ActualStart?: Maybe<string>;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  ResourceId: string;

  ShiftId: string;

  UID: string;
}

export interface SchemaSubscriptionNotificationTemplatedShifts
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionTemplatedShifts;

  previous: SchemaSubscriptionTemplatedShifts;
}

export interface SchemaSubscriptionTemplatedShifts {
  CreatedById: string;

  CreatedDate: string;

  DisplayName?: Maybe<string>;

  Duration: number;

  IsDraft: boolean;

  LastModifiedById: string;

  LastModifiedDate: string;

  LocationId?: Maybe<string>;

  RegionId: string;

  ScheduleTemplateId: string;

  StartOffsetDays: number;

  StartTimeOfDay: LocalTime;

  UID: string;
}

export interface SchemaSubscriptionNotificationJobAllocations
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionJobAllocations;

  previous: SchemaSubscriptionJobAllocations;
}

export interface SchemaSubscriptionJobAllocations {
  CreatedById: string;

  CreatedDate: string;

  DeclineDescription?: Maybe<string>;

  DeclineReason?: Maybe<string>;

  Duration?: Maybe<number>;

  End?: Maybe<string>;

  EstimatedTravelDistance?: Maybe<number>;

  EstimatedTravelTime?: Maybe<number>;

  GeoCheckedInLatitude?: Maybe<number>;

  GeoCheckedInLongitude?: Maybe<number>;

  GeoCompletedLatitude?: Maybe<number>;

  GeoCompletedLongitude?: Maybe<number>;

  GeoInProgressLatitude?: Maybe<number>;

  GeoInProgressLongitude?: Maybe<number>;

  GeoStartTravelLatitude?: Maybe<number>;

  GeoStartTravelLongitude?: Maybe<number>;

  JobId: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  NotificationType?: Maybe<string>;

  PhoneResponse?: Maybe<string>;

  ResourceId: string;

  ResourceRequirementId?: Maybe<string>;

  Start?: Maybe<string>;

  Status: string;

  TeamLeader: boolean;

  TimeCheckedIn?: Maybe<string>;

  TimeCompleted?: Maybe<string>;

  TimeInProgress?: Maybe<string>;

  TimePublished?: Maybe<string>;

  TimeResponded?: Maybe<string>;

  TimeStartTravel?: Maybe<string>;

  TravelDistance?: Maybe<number>;

  TravelTime?: Maybe<number>;

  UID: string;
}

export interface SchemaSubscriptionNotificationResourceOverrideRegions
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionResourceOverrideRegions;

  previous: SchemaSubscriptionResourceOverrideRegions;
}

export interface SchemaSubscriptionResourceOverrideRegions {
  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  RegionId: string;

  ResourceOverrideId: string;

  UID: string;
}

export interface SchemaSubscriptionNotificationJobs
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionJobs;

  previous: SchemaSubscriptionJobs;
}

export interface SchemaSubscriptionJobs {
  AbortReason?: Maybe<string>;

  AccountId?: Maybe<string>;

  ActualEnd?: Maybe<string>;

  ActualStart?: Maybe<string>;

  Address?: Maybe<string>;

  AutoSchedule: boolean;

  CanBeDeclined: boolean;

  CompletionNotes?: Maybe<string>;

  ContactId?: Maybe<string>;

  CopiedFromId?: Maybe<string>;

  CreatedById: string;

  CreatedDate: string;

  CustomerConfirmationStatus?: Maybe<string>;

  Description?: Maybe<string>;

  Duration: number;

  End?: Maybe<string>;

  EstimatedEnd?: Maybe<string>;

  EstimatedStart?: Maybe<string>;

  FollowupReason?: Maybe<string>;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  IsGroupEvent: boolean;

  JobAllocationCount: number;

  JobAllocationTimeSource: boolean;

  JobStatus: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  LocationId?: Maybe<string>;

  Locked: boolean;

  MaxAttendees?: Maybe<number>;

  MinAttendees?: Maybe<number>;

  ModuleId?: Maybe<number>;

  Name: string;

  NotesComments?: Maybe<string>;

  NotifyBy?: Maybe<string>;

  NotifyPeriod?: Maybe<number>;

  ParentId?: Maybe<string>;

  Quantity?: Maybe<number>;

  RecurringScheduleId?: Maybe<string>;

  RegionId: string;

  ScheduleTemplateId?: Maybe<string>;

  Start?: Maybe<string>;

  TemplatedJobId?: Maybe<string>;

  Timezone: string;

  Type?: Maybe<string>;

  UID: string;

  Urgency?: Maybe<string>;

  VirtualMeetingId?: Maybe<string>;

  VirtualMeetingInfo?: Maybe<string>;

  VirtualMeetingURL?: Maybe<string>;
}

export interface SchemaSubscriptionNotificationResourceOverrides
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionResourceOverrides;

  previous: SchemaSubscriptionResourceOverrides;
}

export interface SchemaSubscriptionResourceOverrides {
  CreatedById: string;

  CreatedDate: string;

  Description?: Maybe<string>;

  End: string;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  HomeAddress?: Maybe<string>;

  LastModifiedById: string;

  LastModifiedDate: string;

  ResourceId: string;

  Start: string;

  UID: string;
}

export interface SchemaSubscriptionNotificationEduMeSettings
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionEduMeSettings;

  previous: SchemaSubscriptionEduMeSettings;
}

export interface SchemaSubscriptionEduMeSettings {
  ApiKey?: Maybe<string>;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name?: Maybe<string>;

  UID: string;
}

export interface SchemaSubscriptionNotificationShiftOffers
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionShiftOffers;

  previous: SchemaSubscriptionShiftOffers;
}

export interface SchemaSubscriptionShiftOffers {
  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Status: string;

  UID: string;
}

export interface SchemaSubscriptionNotificationRecurringSchedules
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionRecurringSchedules;

  previous: SchemaSubscriptionRecurringSchedules;
}

export interface SchemaSubscriptionRecurringSchedules {
  AckAllJobs: boolean;

  CreatedById: string;

  CreatedDate: string;

  Description?: Maybe<string>;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  Pattern?: Maybe<string>;

  Summary?: Maybe<string>;

  UID: string;
}

export interface SchemaSubscriptionNotificationJobTags
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionJobTags;

  previous: SchemaSubscriptionJobTags;
}

export interface SchemaSubscriptionJobTags {
  CreatedById: string;

  CreatedDate: string;

  JobId: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Required: boolean;

  TagId: string;

  UID: string;

  Weighting?: Maybe<number>;
}

export interface SchemaSubscriptionNotificationActivities
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionActivities;

  previous: SchemaSubscriptionActivities;
}

export interface SchemaSubscriptionActivities {
  Address?: Maybe<string>;

  CopiedFromId?: Maybe<string>;

  CreatedById: string;

  CreatedDate: string;

  End: string;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  LastModifiedById: string;

  LastModifiedDate: string;

  LocationId?: Maybe<string>;

  Name: string;

  Notes?: Maybe<string>;

  Quantity?: Maybe<number>;

  ResourceId?: Maybe<string>;

  ScheduleTemplateId?: Maybe<string>;

  Start: string;

  TemplatedActivityId?: Maybe<string>;

  Timezone?: Maybe<string>;

  Type?: Maybe<string>;

  UID: string;
}

export interface SchemaSubscriptionNotificationTemplatedResourceRequirements
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionTemplatedResourceRequirements;

  previous: SchemaSubscriptionTemplatedResourceRequirements;
}

export interface SchemaSubscriptionTemplatedResourceRequirements {
  CreatedById: string;

  CreatedDate: string;

  Description?: Maybe<string>;

  JobAllocationTimeSource: boolean;

  LastModifiedById: string;

  LastModifiedDate: string;

  Quantity: number;

  RelativeStart?: Maybe<number>;

  TemplatedJobId: string;

  UID: string;
}

export interface SchemaSubscriptionNotificationTemplatedResourceRequirementTags
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionTemplatedResourceRequirementTags;

  previous: SchemaSubscriptionTemplatedResourceRequirementTags;
}

export interface SchemaSubscriptionTemplatedResourceRequirementTags {
  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Required: boolean;

  TagId: string;

  TemplatedResourceRequirementId: string;

  UID: string;

  Weighting?: Maybe<number>;
}

export interface SchemaSubscriptionNotificationAvailabilityTemplateResources
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionAvailabilityTemplateResources;

  previous: SchemaSubscriptionAvailabilityTemplateResources;
}

export interface SchemaSubscriptionAvailabilityTemplateResources {
  AvailabilityTemplateId: string;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Migrated: boolean;

  ResourceId: string;

  UID: string;
}

export interface SchemaSubscriptionNotificationActivityResources
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionActivityResources;

  previous: SchemaSubscriptionActivityResources;
}

export interface SchemaSubscriptionActivityResources {
  ActivityId: string;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  ResourceId: string;

  UID: string;
}

export interface SchemaSubscriptionNotificationErrorLogs
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionErrorLogs;

  previous: SchemaSubscriptionErrorLogs;
}

export interface SchemaSubscriptionErrorLogs {
  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Log?: Maybe<string>;

  Name?: Maybe<string>;

  Payload?: Maybe<string>;

  UID: string;
}

export interface SchemaSubscriptionNotificationResourceTags
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionResourceTags;

  previous: SchemaSubscriptionResourceTags;
}

export interface SchemaSubscriptionResourceTags {
  CreatedById: string;

  CreatedDate: string;

  ExpiryDate?: Maybe<string>;

  LastModifiedById: string;

  LastModifiedDate: string;

  ResourceId: string;

  TagId: string;

  UID: string;
}

export interface SchemaSubscriptionNotificationTemplatedActivities
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionTemplatedActivities;

  previous: SchemaSubscriptionTemplatedActivities;
}

export interface SchemaSubscriptionTemplatedActivities {
  Address?: Maybe<string>;

  CreatedById: string;

  CreatedDate: string;

  Duration: number;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  LastModifiedById: string;

  LastModifiedDate: string;

  LocationId?: Maybe<string>;

  Notes?: Maybe<string>;

  Quantity?: Maybe<number>;

  ResourceId?: Maybe<string>;

  ScheduleTemplateId: string;

  StartOffsetDays: number;

  StartTimeOfDay: LocalTime;

  Timezone: string;

  Type?: Maybe<string>;

  UID: string;
}

export interface SchemaSubscriptionNotificationJobTimeConstraints
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionJobTimeConstraints;

  previous: SchemaSubscriptionJobTimeConstraints;
}

export interface SchemaSubscriptionJobTimeConstraints {
  CreatedById: string;

  CreatedDate: string;

  EndBefore?: Maybe<string>;

  JobId: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Required: boolean;

  StartAfter?: Maybe<string>;

  StartBefore?: Maybe<string>;

  Type: string;

  UID: string;
}

export interface SchemaSubscriptionNotificationJobOffers
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionJobOffers;

  previous: SchemaSubscriptionJobOffers;
}

export interface SchemaSubscriptionJobOffers {
  CreatedById: string;

  CreatedByResource: boolean;

  CreatedDate: string;

  JobId: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  ResourceRequirementId?: Maybe<string>;

  Status: string;

  UID: string;
}

export interface SchemaSubscriptionNotificationAvailabilities
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionAvailabilities;

  previous: SchemaSubscriptionAvailabilities;
}

export interface SchemaSubscriptionAvailabilities {
  CreatedById: string;

  CreatedDate: string;

  Finish: string;

  IsAvailable: boolean;

  LastModifiedById: string;

  LastModifiedDate: string;

  Notes?: Maybe<string>;

  ResourceId: string;

  Start: string;

  Status?: Maybe<string>;

  Type?: Maybe<string>;

  UID: string;
}

export interface SchemaSubscriptionNotificationContactTags
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionContactTags;

  previous: SchemaSubscriptionContactTags;
}

export interface SchemaSubscriptionContactTags {
  ContactId: string;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Required: boolean;

  TagId: string;

  UID: string;

  Weighting?: Maybe<number>;
}

export interface SchemaSubscriptionNotificationClientAvailabilities
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionClientAvailabilities;

  previous: SchemaSubscriptionClientAvailabilities;
}

export interface SchemaSubscriptionClientAvailabilities {
  AccountId?: Maybe<string>;

  ContactId?: Maybe<string>;

  CreatedById: string;

  CreatedDate: string;

  End: string;

  IsAvailable: boolean;

  LastModifiedById: string;

  LastModifiedDate: string;

  PreferredEnd?: Maybe<string>;

  PreferredStart?: Maybe<string>;

  RecurringScheduleId?: Maybe<string>;

  Start: string;

  UID: string;
}

export interface SchemaSubscriptionNotificationTemplatedJobAllocations
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionTemplatedJobAllocations;

  previous: SchemaSubscriptionTemplatedJobAllocations;
}

export interface SchemaSubscriptionTemplatedJobAllocations {
  CreatedById: string;

  CreatedDate: string;

  Duration?: Maybe<number>;

  LastModifiedById: string;

  LastModifiedDate: string;

  NotificationType?: Maybe<string>;

  ResourceId: string;

  StartOffsetDays?: Maybe<number>;

  StartTimeOfDay?: Maybe<LocalTime>;

  Status: string;

  TeamLeader: boolean;

  TemplatedJobId: string;

  TemplatedResourceRequirementId?: Maybe<string>;

  UID: string;
}

export interface SchemaSubscriptionNotificationAttendees
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionAttendees;

  previous: SchemaSubscriptionAttendees;
}

export interface SchemaSubscriptionAttendees {
  CancelReason?: Maybe<string>;

  ContactId: string;

  CreatedById: string;

  CreatedDate: string;

  JobId: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Status: string;

  TimeCancelled?: Maybe<string>;

  UID: string;
}

export interface SchemaSubscriptionNotificationResourceRequirementTags
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionResourceRequirementTags;

  previous: SchemaSubscriptionResourceRequirementTags;
}

export interface SchemaSubscriptionResourceRequirementTags {
  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Required: boolean;

  ResourceRequirementId: string;

  TagId: string;

  UID: string;

  Weighting?: Maybe<number>;
}

export interface SchemaSubscriptionNotificationShifts
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionShifts;

  previous: SchemaSubscriptionShifts;
}

export interface SchemaSubscriptionShifts {
  CopiedFromId?: Maybe<string>;

  CreatedById: string;

  CreatedDate: string;

  DisplayName?: Maybe<string>;

  Duration: number;

  End: string;

  IsDraft: boolean;

  LastModifiedById: string;

  LastModifiedDate: string;

  LocationId?: Maybe<string>;

  Name: string;

  RegionId?: Maybe<string>;

  ScheduleTemplateId?: Maybe<string>;

  Start: string;

  TemplatedShiftId?: Maybe<string>;

  UID: string;
}

export interface SchemaSubscriptionNotificationTemplatedActivityResources
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionTemplatedActivityResources;

  previous: SchemaSubscriptionTemplatedActivityResources;
}

export interface SchemaSubscriptionTemplatedActivityResources {
  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  ResourceId: string;

  TemplatedActivityId: string;

  UID: string;
}

export interface SchemaSubscriptionNotificationTemplatedJobDependencies
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionTemplatedJobDependencies;

  previous: SchemaSubscriptionTemplatedJobDependencies;
}

export interface SchemaSubscriptionTemplatedJobDependencies {
  CreatedById: string;

  CreatedDate: string;

  FromAnchor: string;

  FromTemplatedJobId: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  ToAnchor: string;

  ToAnchorMaxOffsetMinutes?: Maybe<number>;

  ToAnchorMinOffsetMinutes?: Maybe<number>;

  ToTemplatedJobId: string;

  UID: string;
}

export interface SchemaSubscriptionNotificationTemplatedJobProducts
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionTemplatedJobProducts;

  previous: SchemaSubscriptionTemplatedJobProducts;
}

export interface SchemaSubscriptionTemplatedJobProducts {
  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  ProductId?: Maybe<string>;

  Qty: number;

  TemplatedJobId: string;

  UID: string;
}

export interface SchemaSubscriptionNotificationShiftOfferShifts
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionShiftOfferShifts;

  previous: SchemaSubscriptionShiftOfferShifts;
}

export interface SchemaSubscriptionShiftOfferShifts {
  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  ShiftId: string;

  ShiftOfferId: string;

  UID: string;
}

export interface SchemaSubscriptionNotificationTemplatedJobTasks
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionTemplatedJobTasks;

  previous: SchemaSubscriptionTemplatedJobTasks;
}

export interface SchemaSubscriptionTemplatedJobTasks {
  Completed: boolean;

  CreatedById: string;

  CreatedDate: string;

  Description?: Maybe<string>;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  Seq: number;

  TemplatedJobId: string;

  UID: string;
}

export interface SchemaSubscriptionNotificationTemplatedJobTags
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionTemplatedJobTags;

  previous: SchemaSubscriptionTemplatedJobTags;
}

export interface SchemaSubscriptionTemplatedJobTags {
  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Required: boolean;

  TagId: string;

  TemplatedJobId: string;

  UID: string;

  Weighting?: Maybe<number>;
}

export interface SchemaSubscriptionNotificationResourceShiftOffers
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionResourceShiftOffers;

  previous: SchemaSubscriptionResourceShiftOffers;
}

export interface SchemaSubscriptionResourceShiftOffers {
  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  ResourceId: string;

  Response?: Maybe<string>;

  ShiftOfferId: string;

  Status: string;

  TimeNotified?: Maybe<string>;

  TimeResponded?: Maybe<string>;

  UID: string;
}

export interface SchemaSubscriptionNotificationShiftTags
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionShiftTags;

  previous: SchemaSubscriptionShiftTags;
}

export interface SchemaSubscriptionShiftTags {
  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Required: boolean;

  ShiftId: string;

  TagId: string;

  UID: string;

  Weighting?: Maybe<number>;
}

export interface SchemaSubscriptionNotificationLocations
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionLocations;

  previous: SchemaSubscriptionLocations;
}

export interface SchemaSubscriptionLocations {
  AccountId?: Maybe<string>;

  Address?: Maybe<string>;

  CreatedById: string;

  CreatedDate: string;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  RegionId?: Maybe<string>;

  RequiresWhitelist: boolean;

  Type?: Maybe<string>;

  UID: string;
}

export interface SchemaSubscriptionNotificationTemplatedShiftTags
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionTemplatedShiftTags;

  previous: SchemaSubscriptionTemplatedShiftTags;
}

export interface SchemaSubscriptionTemplatedShiftTags {
  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Required: boolean;

  TagId: string;

  TemplatedShiftId: string;

  UID: string;

  Weighting?: Maybe<number>;
}

export interface SchemaSubscriptionNotificationTemplatedJobTimeConstraints
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionTemplatedJobTimeConstraints;

  previous: SchemaSubscriptionTemplatedJobTimeConstraints;
}

export interface SchemaSubscriptionTemplatedJobTimeConstraints {
  CreatedById: string;

  CreatedDate: string;

  EndBeforeOffsetDays?: Maybe<number>;

  EndBeforeTimeOfDay?: Maybe<LocalTime>;

  LastModifiedById: string;

  LastModifiedDate: string;

  Required: boolean;

  StartAfterOffsetDays?: Maybe<number>;

  StartAfterTimeOfDay?: Maybe<LocalTime>;

  StartBeforeOffsetDays?: Maybe<number>;

  StartBeforeTimeOfDay?: Maybe<LocalTime>;

  TemplatedJobId: string;

  Type: string;

  UID: string;
}

export interface SchemaSubscriptionNotificationResourceShiftBreaks
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionResourceShiftBreaks;

  previous: SchemaSubscriptionResourceShiftBreaks;
}

export interface SchemaSubscriptionResourceShiftBreaks {
  CreatedById: string;

  CreatedDate: string;

  End?: Maybe<string>;

  LastModifiedById: string;

  LastModifiedDate: string;

  ResourceShiftId: string;

  Start: string;

  UID: string;
}

export interface SchemaSubscriptionNotificationTemplatedAttendees
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionTemplatedAttendees;

  previous: SchemaSubscriptionTemplatedAttendees;
}

export interface SchemaSubscriptionTemplatedAttendees {
  ContactId: string;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  TemplatedJobId: string;

  UID: string;
}

export interface SchemaSubscriptionNotificationAccountTags
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionAccountTags;

  previous: SchemaSubscriptionAccountTags;
}

export interface SchemaSubscriptionAccountTags {
  AccountId: string;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Required: boolean;

  TagId: string;

  UID: string;

  Weighting?: Maybe<number>;
}

export interface SchemaSubscriptionNotificationRegions
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionRegions;

  previous: SchemaSubscriptionRegions;
}

export interface SchemaSubscriptionRegions {
  CountryCode?: Maybe<string>;

  CreatedById: string;

  CreatedDate: string;

  Description?: Maybe<string>;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  Radius?: Maybe<number>;

  Timezone: string;

  UID: string;
}

export interface SchemaSubscriptionNotificationJobDependencies
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionJobDependencies;

  previous: SchemaSubscriptionJobDependencies;
}

export interface SchemaSubscriptionJobDependencies {
  CreatedById: string;

  CreatedDate: string;

  FromAnchor: string;

  FromJobId: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  ToAnchor: string;

  ToAnchorMaxOffsetMinutes?: Maybe<number>;

  ToAnchorMinOffsetMinutes?: Maybe<number>;

  ToJobId: string;

  UID: string;
}

export interface SchemaSubscriptionNotificationScheduleTemplates
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionScheduleTemplates;

  previous: SchemaSubscriptionScheduleTemplates;
}

export interface SchemaSubscriptionScheduleTemplates {
  CreatedById: string;

  CreatedDate: string;

  DeletedById?: Maybe<string>;

  DeletedDate?: Maybe<string>;

  Description?: Maybe<string>;

  IsDeleted: boolean;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  PeriodDays?: Maybe<number>;

  UID: string;
}

export interface SchemaSubscriptionNotificationUsers
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionUsers;

  previous: SchemaSubscriptionUsers;
}

export interface SchemaSubscriptionUsers {
  City?: Maybe<string>;

  Country?: Maybe<string>;

  CreatedById: string;

  CreatedDate: string;

  Email: string;

  ExternalUserId?: Maybe<string>;

  FirstName?: Maybe<string>;

  FullPhotoUrl: string;

  IsActive: boolean;

  LastModifiedById: string;

  LastModifiedDate: string;

  LastName: string;

  MobilePhone?: Maybe<string>;

  Name: string;

  PostalCode?: Maybe<string>;

  SmallPhotoUrl: string;

  State?: Maybe<string>;

  Street?: Maybe<string>;

  UID: string;

  UserTypes?: Maybe<string[]>;
}

export interface SchemaSubscriptionNotificationResources
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionResources;

  previous: SchemaSubscriptionResources;
}

export interface SchemaSubscriptionResources {
  Alias?: Maybe<string>;

  AutoSchedule: boolean;

  Category?: Maybe<string>;

  CountryCode?: Maybe<string>;

  CreatedById: string;

  CreatedDate: string;

  Email?: Maybe<string>;

  EmploymentType?: Maybe<string>;

  GeoLatitude?: Maybe<number>;

  GeoLongitude?: Maybe<number>;

  HomeAddress?: Maybe<string>;

  IsActive: boolean;

  LastModifiedById: string;

  LastModifiedDate: string;

  MobilePhone?: Maybe<string>;

  Name: string;

  Notes?: Maybe<string>;

  NotificationType?: Maybe<string>;

  PrimaryPhone?: Maybe<string>;

  PrimaryRegionId: string;

  Rating?: Maybe<number>;

  ResourceType?: Maybe<string>;

  TeamId?: Maybe<number>;

  UID: string;

  UserId?: Maybe<string>;

  WeeklyHours?: Maybe<number>;

  WorkingHourType?: Maybe<string>;
}

export interface SchemaSubscriptionNotificationHolidayRegions
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionHolidayRegions;

  previous: SchemaSubscriptionHolidayRegions;
}

export interface SchemaSubscriptionHolidayRegions {
  CreatedById: string;

  CreatedDate: string;

  HolidayId: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  RegionId: string;

  UID: string;
}

export interface SchemaSubscriptionNotificationAvailabilityTemplates
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionAvailabilityTemplates;

  previous: SchemaSubscriptionAvailabilityTemplates;
}

export interface SchemaSubscriptionAvailabilityTemplates {
  AvailabilityPatternId?: Maybe<string>;

  CreatedById: string;

  CreatedDate: string;

  Finish?: Maybe<LocalDate>;

  Global: boolean;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  Start?: Maybe<LocalDate>;

  UID: string;
}

export interface SchemaSubscriptionNotificationResourceJobOffers
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionResourceJobOffers;

  previous: SchemaSubscriptionResourceJobOffers;
}

export interface SchemaSubscriptionResourceJobOffers {
  CreatedById: string;

  CreatedDate: string;

  JobOfferId: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  ResourceId: string;

  Response?: Maybe<string>;

  Status: string;

  TimeNotified?: Maybe<string>;

  TimeResponded?: Maybe<string>;

  UID: string;
}

export interface SchemaSubscriptionNotificationAccounts
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionAccounts;

  previous: SchemaSubscriptionAccounts;
}

export interface SchemaSubscriptionAccounts {
  BillingCity?: Maybe<string>;

  BillingPostalCode?: Maybe<string>;

  BillingState?: Maybe<string>;

  BillingStreet?: Maybe<string>;

  CreatedById: string;

  CreatedDate: string;

  Fax?: Maybe<string>;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  Phone?: Maybe<string>;

  Rank?: Maybe<number>;

  RequiresWhitelist: boolean;

  ShippingCity?: Maybe<string>;

  ShippingPostalCode?: Maybe<string>;

  ShippingState?: Maybe<string>;

  ShippingStreet?: Maybe<string>;

  UID: string;
}

export interface SchemaSubscriptionNotificationTemplatedResourceShifts
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionTemplatedResourceShifts;

  previous: SchemaSubscriptionTemplatedResourceShifts;
}

export interface SchemaSubscriptionTemplatedResourceShifts {
  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  ResourceId: string;

  TemplatedShiftId: string;

  UID: string;
}

export interface SchemaSubscriptionNotificationAvailabilityPatterns
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionAvailabilityPatterns;

  previous: SchemaSubscriptionAvailabilityPatterns;
}

export interface SchemaSubscriptionAvailabilityPatterns {
  CreatedById: string;

  CreatedDate: string;

  Description?: Maybe<string>;

  Hash: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  Pattern: string;

  UID: string;
}

export interface SchemaSubscriptionNotificationAvailabilityPatternResources
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionAvailabilityPatternResources;

  previous: SchemaSubscriptionAvailabilityPatternResources;
}

export interface SchemaSubscriptionAvailabilityPatternResources {
  AvailabilityPatternId: string;

  CreatedById: string;

  CreatedDate: string;

  End?: Maybe<string>;

  LastModifiedById: string;

  LastModifiedDate: string;

  ResourceId: string;

  Start: string;

  Status?: Maybe<string>;

  UID: string;
}

export interface SchemaSubscriptionNotificationAvailabilityTemplateEntries
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionAvailabilityTemplateEntries;

  previous: SchemaSubscriptionAvailabilityTemplateEntries;
}

export interface SchemaSubscriptionAvailabilityTemplateEntries {
  AvailabilityTemplateId: string;

  CreatedById: string;

  CreatedDate: string;

  FinishTime: number;

  IsAvailable: boolean;

  LastModifiedById: string;

  LastModifiedDate: string;

  StartTime: number;

  UID: string;

  Weekday: string;
}

export interface SchemaSubscriptionNotificationAccountResourceScores
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionAccountResourceScores;

  previous: SchemaSubscriptionAccountResourceScores;
}

export interface SchemaSubscriptionAccountResourceScores {
  AccountId: string;

  Blacklisted: boolean;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  ResourceId: string;

  UID: string;

  Whitelisted: boolean;
}

export interface SchemaSubscriptionNotificationContacts
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionContacts;

  previous: SchemaSubscriptionContacts;
}

export interface SchemaSubscriptionContacts {
  AccountId?: Maybe<string>;

  CreatedById: string;

  CreatedDate: string;

  Email?: Maybe<string>;

  FirstName?: Maybe<string>;

  FullName: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  LastName: string;

  MailingCity?: Maybe<string>;

  MailingPostalCode?: Maybe<string>;

  MailingState?: Maybe<string>;

  MailingStreet?: Maybe<string>;

  MobilePhone?: Maybe<string>;

  OtherCity?: Maybe<string>;

  OtherPostalCode?: Maybe<string>;

  OtherState?: Maybe<string>;

  OtherStreet?: Maybe<string>;

  Phone?: Maybe<string>;

  RegionId?: Maybe<string>;

  Title?: Maybe<string>;

  UID: string;
}

export interface SchemaSubscriptionNotificationProducts
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionProducts;

  previous: SchemaSubscriptionProducts;
}

export interface SchemaSubscriptionProducts {
  CreatedById: string;

  CreatedDate: string;

  Description?: Maybe<string>;

  Family?: Maybe<string>;

  IsActive: boolean;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  ProductCode?: Maybe<string>;

  UID: string;
}

export interface SchemaSubscriptionNotificationJobTasks
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionJobTasks;

  previous: SchemaSubscriptionJobTasks;
}

export interface SchemaSubscriptionJobTasks {
  Completed: boolean;

  CreatedById: string;

  CreatedDate: string;

  Description?: Maybe<string>;

  JobId: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  Seq: number;

  UID: string;
}

export interface SchemaSubscriptionNotificationHolidays
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionHolidays;

  previous: SchemaSubscriptionHolidays;
}

export interface SchemaSubscriptionHolidays {
  CreatedById: string;

  CreatedDate: string;

  EndDate: LocalDate;

  Global: boolean;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  StartDate: LocalDate;

  UID: string;
}

export interface SchemaSubscriptionNotificationResourceRequirements
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionResourceRequirements;

  previous: SchemaSubscriptionResourceRequirements;
}

export interface SchemaSubscriptionResourceRequirements {
  CreatedById: string;

  CreatedDate: string;

  Description?: Maybe<string>;

  Duration?: Maybe<number>;

  JobAllocationCount: number;

  JobAllocationTimeSource: boolean;

  JobId: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  Name: string;

  Quantity: number;

  RelativeStart?: Maybe<number>;

  ScheduledEnd?: Maybe<string>;

  ScheduledStart?: Maybe<string>;

  Status: string;

  UID: string;
}

export interface SchemaSubscriptionNotificationLocationResourceScores
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionLocationResourceScores;

  previous: SchemaSubscriptionLocationResourceScores;
}

export interface SchemaSubscriptionLocationResourceScores {
  Blacklisted: boolean;

  CreatedById: string;

  CreatedDate: string;

  LastModifiedById: string;

  LastModifiedDate: string;

  LocationId: string;

  ResourceId: string;

  UID: string;

  Whitelisted: boolean;
}

export interface SchemaSubscriptionNotificationResourceRegions
  extends SchemaSubscriptionNotification {
  operation: SchemaSubscriptionOp;

  timestamp: string;

  data: SchemaSubscriptionResourceRegions;

  previous: SchemaSubscriptionResourceRegions;
}

export interface SchemaSubscriptionResourceRegions {
  CreatedById: string;

  CreatedDate: string;

  End?: Maybe<string>;

  LastModifiedById: string;

  LastModifiedDate: string;

  RegionId: string;

  ResourceId: string;

  Start?: Maybe<string>;

  UID: string;
}

// ====================================================
// Arguments
// ====================================================

export interface AccountResourceScoresQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterAccountResourceScores>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseAccountResourceScores>;
}
export interface AccountResourceScoresByIdQueryArgs {
  UID: string;
}
export interface AccountTagsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterAccountTags>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseAccountTags>;
}
export interface AccountTagsByIdQueryArgs {
  UID: string;
}
export interface AccountsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterAccounts>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseAccounts>;
}
export interface AccountsByIdQueryArgs {
  UID: string;
}
export interface ActivitiesQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterActivities>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseActivities>;
}
export interface ActivitiesByIdQueryArgs {
  UID: string;
}
export interface ActivityResourcesQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterActivityResources>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseActivityResources>;
}
export interface ActivityResourcesByIdQueryArgs {
  UID: string;
}
export interface AttendeesQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterAttendees>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseAttendees>;
}
export interface AttendeesByIdQueryArgs {
  UID: string;
}
export interface AvailabilitiesQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterAvailabilities>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseAvailabilities>;
}
export interface AvailabilitiesByIdQueryArgs {
  UID: string;
}
export interface AvailabilityPatternResourcesQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterAvailabilityPatternResources>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseAvailabilityPatternResources>;
}
export interface AvailabilityPatternResourcesByIdQueryArgs {
  UID: string;
}
export interface AvailabilityPatternsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterAvailabilityPatterns>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseAvailabilityPatterns>;
}
export interface AvailabilityPatternsByIdQueryArgs {
  UID: string;
}
export interface AvailabilityTemplateEntriesQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterAvailabilityTemplateEntries>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseAvailabilityTemplateEntries>;
}
export interface AvailabilityTemplateEntriesByIdQueryArgs {
  UID: string;
}
export interface AvailabilityTemplateResourcesQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterAvailabilityTemplateResources>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseAvailabilityTemplateResources>;
}
export interface AvailabilityTemplateResourcesByIdQueryArgs {
  UID: string;
}
export interface AvailabilityTemplatesQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterAvailabilityTemplates>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseAvailabilityTemplates>;
}
export interface AvailabilityTemplatesByIdQueryArgs {
  UID: string;
}
export interface ClientAvailabilitiesQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterClientAvailabilities>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseClientAvailabilities>;
}
export interface ClientAvailabilitiesByIdQueryArgs {
  UID: string;
}
export interface ContactTagsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterContactTags>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseContactTags>;
}
export interface ContactTagsByIdQueryArgs {
  UID: string;
}
export interface ContactsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterContacts>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseContacts>;
}
export interface ContactsByIdQueryArgs {
  UID: string;
}
export interface EduMeSettingsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterEduMeSettings>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseEduMeSettings>;
}
export interface EduMeSettingsByIdQueryArgs {
  UID: string;
}
export interface ErrorLogsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterErrorLogs>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseErrorLogs>;
}
export interface ErrorLogsByIdQueryArgs {
  UID: string;
}
export interface HolidayRegionsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterHolidayRegions>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseHolidayRegions>;
}
export interface HolidayRegionsByIdQueryArgs {
  UID: string;
}
export interface HolidaysQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterHolidays>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseHolidays>;
}
export interface HolidaysByIdQueryArgs {
  UID: string;
}
export interface JobAllocationsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterJobAllocations>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseJobAllocations>;
}
export interface JobAllocationsByIdQueryArgs {
  UID: string;
}
export interface JobDependenciesQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterJobDependencies>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseJobDependencies>;
}
export interface JobDependenciesByIdQueryArgs {
  UID: string;
}
export interface JobOffersQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterJobOffers>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseJobOffers>;
}
export interface JobOffersByIdQueryArgs {
  UID: string;
}
export interface JobProductsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterJobProducts>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseJobProducts>;
}
export interface JobProductsByIdQueryArgs {
  UID: string;
}
export interface JobTagsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterJobTags>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseJobTags>;
}
export interface JobTagsByIdQueryArgs {
  UID: string;
}
export interface JobTasksQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterJobTasks>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseJobTasks>;
}
export interface JobTasksByIdQueryArgs {
  UID: string;
}
export interface JobTimeConstraintsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterJobTimeConstraints>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseJobTimeConstraints>;
}
export interface JobTimeConstraintsByIdQueryArgs {
  UID: string;
}
export interface JobsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterJobs>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseJobs>;
}
export interface JobsByIdQueryArgs {
  UID: string;
}
export interface LocationResourceScoresQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterLocationResourceScores>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseLocationResourceScores>;
}
export interface LocationResourceScoresByIdQueryArgs {
  UID: string;
}
export interface LocationsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterLocations>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseLocations>;
}
export interface LocationsByIdQueryArgs {
  UID: string;
}
export interface ProductsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterProducts>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseProducts>;
}
export interface ProductsByIdQueryArgs {
  UID: string;
}
export interface RecurringSchedulesQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterRecurringSchedules>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseRecurringSchedules>;
}
export interface RecurringSchedulesByIdQueryArgs {
  UID: string;
}
export interface RegionsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterRegions>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseRegions>;
}
export interface RegionsByIdQueryArgs {
  UID: string;
}
export interface ResourceJobOffersQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterResourceJobOffers>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseResourceJobOffers>;
}
export interface ResourceJobOffersByIdQueryArgs {
  UID: string;
}
export interface ResourceOverrideRegionsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterResourceOverrideRegions>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseResourceOverrideRegions>;
}
export interface ResourceOverrideRegionsByIdQueryArgs {
  UID: string;
}
export interface ResourceOverridesQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterResourceOverrides>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseResourceOverrides>;
}
export interface ResourceOverridesByIdQueryArgs {
  UID: string;
}
export interface ResourceRegionsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterResourceRegions>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseResourceRegions>;
}
export interface ResourceRegionsByIdQueryArgs {
  UID: string;
}
export interface ResourceRequirementTagsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterResourceRequirementTags>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseResourceRequirementTags>;
}
export interface ResourceRequirementTagsByIdQueryArgs {
  UID: string;
}
export interface ResourceRequirementsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterResourceRequirements>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseResourceRequirements>;
}
export interface ResourceRequirementsByIdQueryArgs {
  UID: string;
}
export interface ResourceShiftBreaksQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterResourceShiftBreaks>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseResourceShiftBreaks>;
}
export interface ResourceShiftBreaksByIdQueryArgs {
  UID: string;
}
export interface ResourceShiftOffersQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterResourceShiftOffers>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseResourceShiftOffers>;
}
export interface ResourceShiftOffersByIdQueryArgs {
  UID: string;
}
export interface ResourceShiftsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterResourceShifts>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseResourceShifts>;
}
export interface ResourceShiftsByIdQueryArgs {
  UID: string;
}
export interface ResourceTagsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterResourceTags>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseResourceTags>;
}
export interface ResourceTagsByIdQueryArgs {
  UID: string;
}
export interface ResourcesQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterResources>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseResources>;
}
export interface ResourcesByIdQueryArgs {
  UID: string;
}
export interface ResourcesInRegionsQueryArgs {
  end: string;

  regionIds: string[];

  start: string;
}
export interface ScheduleTemplatesQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterScheduleTemplates>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseScheduleTemplates>;
}
export interface ScheduleTemplatesByIdQueryArgs {
  UID: string;
}
export interface ShiftOfferShiftsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterShiftOfferShifts>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseShiftOfferShifts>;
}
export interface ShiftOfferShiftsByIdQueryArgs {
  UID: string;
}
export interface ShiftOffersQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterShiftOffers>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseShiftOffers>;
}
export interface ShiftOffersByIdQueryArgs {
  UID: string;
}
export interface ShiftTagsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterShiftTags>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseShiftTags>;
}
export interface ShiftTagsByIdQueryArgs {
  UID: string;
}
export interface ShiftsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterShifts>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseShifts>;
}
export interface ShiftsByIdQueryArgs {
  UID: string;
}
export interface TagsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterTags>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseTags>;
}
export interface TagsByIdQueryArgs {
  UID: string;
}
export interface TemplatedActivitiesQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterTemplatedActivities>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedActivities>;
}
export interface TemplatedActivitiesByIdQueryArgs {
  UID: string;
}
export interface TemplatedActivityResourcesQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterTemplatedActivityResources>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedActivityResources>;
}
export interface TemplatedActivityResourcesByIdQueryArgs {
  UID: string;
}
export interface TemplatedAttendeesQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterTemplatedAttendees>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedAttendees>;
}
export interface TemplatedAttendeesByIdQueryArgs {
  UID: string;
}
export interface TemplatedJobAllocationsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterTemplatedJobAllocations>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedJobAllocations>;
}
export interface TemplatedJobAllocationsByIdQueryArgs {
  UID: string;
}
export interface TemplatedJobDependenciesQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterTemplatedJobDependencies>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedJobDependencies>;
}
export interface TemplatedJobDependenciesByIdQueryArgs {
  UID: string;
}
export interface TemplatedJobProductsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterTemplatedJobProducts>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedJobProducts>;
}
export interface TemplatedJobProductsByIdQueryArgs {
  UID: string;
}
export interface TemplatedJobTagsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterTemplatedJobTags>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedJobTags>;
}
export interface TemplatedJobTagsByIdQueryArgs {
  UID: string;
}
export interface TemplatedJobTasksQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterTemplatedJobTasks>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedJobTasks>;
}
export interface TemplatedJobTasksByIdQueryArgs {
  UID: string;
}
export interface TemplatedJobTimeConstraintsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterTemplatedJobTimeConstraints>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedJobTimeConstraints>;
}
export interface TemplatedJobTimeConstraintsByIdQueryArgs {
  UID: string;
}
export interface TemplatedJobsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterTemplatedJobs>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedJobs>;
}
export interface TemplatedJobsByIdQueryArgs {
  UID: string;
}
export interface TemplatedResourceRequirementTagsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterTemplatedResourceRequirementTags>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedResourceRequirementTags>;
}
export interface TemplatedResourceRequirementTagsByIdQueryArgs {
  UID: string;
}
export interface TemplatedResourceRequirementsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterTemplatedResourceRequirements>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedResourceRequirements>;
}
export interface TemplatedResourceRequirementsByIdQueryArgs {
  UID: string;
}
export interface TemplatedResourceShiftsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterTemplatedResourceShifts>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedResourceShifts>;
}
export interface TemplatedResourceShiftsByIdQueryArgs {
  UID: string;
}
export interface TemplatedShiftTagsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterTemplatedShiftTags>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedShiftTags>;
}
export interface TemplatedShiftTagsByIdQueryArgs {
  UID: string;
}
export interface TemplatedShiftsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterTemplatedShifts>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedShifts>;
}
export interface TemplatedShiftsByIdQueryArgs {
  UID: string;
}
export interface UserRegionsQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterUserRegions>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseUserRegions>;
}
export interface UserRegionsByIdQueryArgs {
  UID: string;
}
export interface UsersQueryArgs {
  after?: Maybe<string>;

  filter?: Maybe<EqlQueryFilterUsers>;

  first?: Maybe<number>;

  offset?: Maybe<number>;

  orderBy?: Maybe<EqlOrderByClauseUsers>;
}
export interface UsersByIdQueryArgs {
  UID: string;
}
export interface NotificationsQueryArgs {
  start: string;
}
export interface AvailabilitiesAccountsArgs {
  filter?: Maybe<EqlQueryFilterClientAvailabilities>;

  orderBy?: Maybe<EqlOrderByClauseClientAvailabilities>;
}
export interface ContactsAccountsArgs {
  filter?: Maybe<EqlQueryFilterContacts>;

  orderBy?: Maybe<EqlOrderByClauseContacts>;
}
export interface JobsAccountsArgs {
  filter?: Maybe<EqlQueryFilterJobs>;

  orderBy?: Maybe<EqlOrderByClauseJobs>;
}
export interface LocationsAccountsArgs {
  filter?: Maybe<EqlQueryFilterLocations>;

  orderBy?: Maybe<EqlOrderByClauseLocations>;
}
export interface ResourceScoresAccountsArgs {
  filter?: Maybe<EqlQueryFilterAccountResourceScores>;

  orderBy?: Maybe<EqlOrderByClauseAccountResourceScores>;
}
export interface TagsAccountsArgs {
  filter?: Maybe<EqlQueryFilterAccountTags>;

  orderBy?: Maybe<EqlOrderByClauseAccountTags>;
}
export interface AvailabilitiesContactsArgs {
  filter?: Maybe<EqlQueryFilterClientAvailabilities>;

  orderBy?: Maybe<EqlOrderByClauseClientAvailabilities>;
}
export interface TagsContactsArgs {
  filter?: Maybe<EqlQueryFilterContactTags>;

  orderBy?: Maybe<EqlOrderByClauseContactTags>;
}
export interface ResourcesUsersArgs {
  filter?: Maybe<EqlQueryFilterResources>;

  orderBy?: Maybe<EqlOrderByClauseResources>;
}
export interface UserRegionsUsersArgs {
  filter?: Maybe<EqlQueryFilterUserRegions>;

  orderBy?: Maybe<EqlOrderByClauseUserRegions>;
}
export interface AccountScoresResourcesArgs {
  filter?: Maybe<EqlQueryFilterAccountResourceScores>;

  orderBy?: Maybe<EqlOrderByClauseAccountResourceScores>;
}
export interface ActivitiesResourcesArgs {
  filter?: Maybe<EqlQueryFilterActivities>;

  orderBy?: Maybe<EqlOrderByClauseActivities>;
}
export interface AvailabilitiesResourcesArgs {
  filter?: Maybe<EqlQueryFilterAvailabilities>;

  orderBy?: Maybe<EqlOrderByClauseAvailabilities>;
}
export interface AvailabilityPatternsResourcesArgs {
  filter?: Maybe<EqlQueryFilterAvailabilityPatternResources>;

  orderBy?: Maybe<EqlOrderByClauseAvailabilityPatternResources>;
}
export interface JobAllocationsResourcesArgs {
  filter?: Maybe<EqlQueryFilterJobAllocations>;

  orderBy?: Maybe<EqlOrderByClauseJobAllocations>;
}
export interface LocationScoresResourcesArgs {
  filter?: Maybe<EqlQueryFilterLocationResourceScores>;

  orderBy?: Maybe<EqlOrderByClauseLocationResourceScores>;
}
export interface ResourceActivitiesResourcesArgs {
  filter?: Maybe<EqlQueryFilterActivityResources>;

  orderBy?: Maybe<EqlOrderByClauseActivityResources>;
}
export interface ResourceOverridesResourcesArgs {
  filter?: Maybe<EqlQueryFilterResourceOverrides>;

  orderBy?: Maybe<EqlOrderByClauseResourceOverrides>;
}
export interface ResourceRegionsResourcesArgs {
  filter?: Maybe<EqlQueryFilterResourceRegions>;

  orderBy?: Maybe<EqlOrderByClauseResourceRegions>;
}
export interface ResourceShiftsResourcesArgs {
  filter?: Maybe<EqlQueryFilterResourceShifts>;

  orderBy?: Maybe<EqlOrderByClauseResourceShifts>;
}
export interface ResourceTagsResourcesArgs {
  filter?: Maybe<EqlQueryFilterResourceTags>;

  orderBy?: Maybe<EqlOrderByClauseResourceTags>;
}
export interface TemplatedActivitiesResourcesArgs {
  filter?: Maybe<EqlQueryFilterTemplatedActivities>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedActivities>;
}
export interface TemplatedJobAllocationsResourcesArgs {
  filter?: Maybe<EqlQueryFilterTemplatedJobAllocations>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedJobAllocations>;
}
export interface TemplatedResourceActivitiesResourcesArgs {
  filter?: Maybe<EqlQueryFilterTemplatedActivityResources>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedActivityResources>;
}
export interface TemplatedResourceShiftsResourcesArgs {
  filter?: Maybe<EqlQueryFilterTemplatedResourceShifts>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedResourceShifts>;
}
export interface ActivityResourcesActivitiesArgs {
  filter?: Maybe<EqlQueryFilterActivityResources>;

  orderBy?: Maybe<EqlOrderByClauseActivityResources>;
}
export interface ActivitiesLocationsArgs {
  filter?: Maybe<EqlQueryFilterActivities>;

  orderBy?: Maybe<EqlOrderByClauseActivities>;
}
export interface JobsLocationsArgs {
  filter?: Maybe<EqlQueryFilterJobs>;

  orderBy?: Maybe<EqlOrderByClauseJobs>;
}
export interface ResourceScoresLocationsArgs {
  filter?: Maybe<EqlQueryFilterLocationResourceScores>;

  orderBy?: Maybe<EqlOrderByClauseLocationResourceScores>;
}
export interface ShiftsLocationsArgs {
  filter?: Maybe<EqlQueryFilterShifts>;

  orderBy?: Maybe<EqlOrderByClauseShifts>;
}
export interface AttendeesJobsArgs {
  filter?: Maybe<EqlQueryFilterAttendees>;

  orderBy?: Maybe<EqlOrderByClauseAttendees>;
}
export interface FollowupsJobsArgs {
  filter?: Maybe<EqlQueryFilterJobs>;

  orderBy?: Maybe<EqlOrderByClauseJobs>;
}
export interface JobAllocationsJobsArgs {
  filter?: Maybe<EqlQueryFilterJobAllocations>;

  orderBy?: Maybe<EqlOrderByClauseJobAllocations>;
}
export interface JobDependenciesFromJobsArgs {
  filter?: Maybe<EqlQueryFilterJobDependencies>;

  orderBy?: Maybe<EqlOrderByClauseJobDependencies>;
}
export interface JobDependenciesToJobsArgs {
  filter?: Maybe<EqlQueryFilterJobDependencies>;

  orderBy?: Maybe<EqlOrderByClauseJobDependencies>;
}
export interface JobOffersJobsArgs {
  filter?: Maybe<EqlQueryFilterJobOffers>;

  orderBy?: Maybe<EqlOrderByClauseJobOffers>;
}
export interface JobProductsJobsArgs {
  filter?: Maybe<EqlQueryFilterJobProducts>;

  orderBy?: Maybe<EqlOrderByClauseJobProducts>;
}
export interface JobTagsJobsArgs {
  filter?: Maybe<EqlQueryFilterJobTags>;

  orderBy?: Maybe<EqlOrderByClauseJobTags>;
}
export interface JobTasksJobsArgs {
  filter?: Maybe<EqlQueryFilterJobTasks>;

  orderBy?: Maybe<EqlOrderByClauseJobTasks>;
}
export interface JobTimeConstraintsJobsArgs {
  filter?: Maybe<EqlQueryFilterJobTimeConstraints>;

  orderBy?: Maybe<EqlOrderByClauseJobTimeConstraints>;
}
export interface ResourceRequirementsJobsArgs {
  filter?: Maybe<EqlQueryFilterResourceRequirements>;

  orderBy?: Maybe<EqlOrderByClauseResourceRequirements>;
}
export interface JobAllocationsResourceRequirementsArgs {
  filter?: Maybe<EqlQueryFilterJobAllocations>;

  orderBy?: Maybe<EqlOrderByClauseJobAllocations>;
}
export interface TagsResourceRequirementsArgs {
  filter?: Maybe<EqlQueryFilterResourceRequirementTags>;

  orderBy?: Maybe<EqlOrderByClauseResourceRequirementTags>;
}
export interface ResourceJobOffersJobOffersArgs {
  filter?: Maybe<EqlQueryFilterResourceJobOffers>;

  orderBy?: Maybe<EqlOrderByClauseResourceJobOffers>;
}
export interface ClientAvailabilitiesRecurringSchedulesArgs {
  filter?: Maybe<EqlQueryFilterClientAvailabilities>;

  orderBy?: Maybe<EqlOrderByClauseClientAvailabilities>;
}
export interface JobsRecurringSchedulesArgs {
  filter?: Maybe<EqlQueryFilterJobs>;

  orderBy?: Maybe<EqlOrderByClauseJobs>;
}
export interface ResourcesRegionsArgs {
  filter?: Maybe<EqlQueryFilterResources>;

  orderBy?: Maybe<EqlOrderByClauseResources>;
}
export interface UserRegionsRegionsArgs {
  filter?: Maybe<EqlQueryFilterUserRegions>;

  orderBy?: Maybe<EqlOrderByClauseUserRegions>;
}
export interface ActivitiesScheduleTemplatesArgs {
  filter?: Maybe<EqlQueryFilterActivities>;

  orderBy?: Maybe<EqlOrderByClauseActivities>;
}
export interface JobsScheduleTemplatesArgs {
  filter?: Maybe<EqlQueryFilterJobs>;

  orderBy?: Maybe<EqlOrderByClauseJobs>;
}
export interface ShiftsScheduleTemplatesArgs {
  filter?: Maybe<EqlQueryFilterShifts>;

  orderBy?: Maybe<EqlOrderByClauseShifts>;
}
export interface TemplatedActivitiesScheduleTemplatesArgs {
  filter?: Maybe<EqlQueryFilterTemplatedActivities>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedActivities>;
}
export interface TemplatedJobsScheduleTemplatesArgs {
  filter?: Maybe<EqlQueryFilterTemplatedJobs>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedJobs>;
}
export interface TemplatedShiftsScheduleTemplatesArgs {
  filter?: Maybe<EqlQueryFilterTemplatedShifts>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedShifts>;
}
export interface ResourceShiftsShiftsArgs {
  filter?: Maybe<EqlQueryFilterResourceShifts>;

  orderBy?: Maybe<EqlOrderByClauseResourceShifts>;
}
export interface ShiftOffersShiftsArgs {
  filter?: Maybe<EqlQueryFilterShiftOfferShifts>;

  orderBy?: Maybe<EqlOrderByClauseShiftOfferShifts>;
}
export interface ShiftTagsShiftsArgs {
  filter?: Maybe<EqlQueryFilterShiftTags>;

  orderBy?: Maybe<EqlOrderByClauseShiftTags>;
}
export interface BreaksResourceShiftsArgs {
  filter?: Maybe<EqlQueryFilterResourceShiftBreaks>;

  orderBy?: Maybe<EqlOrderByClauseResourceShiftBreaks>;
}
export interface ResourceShiftOffersShiftOffersArgs {
  filter?: Maybe<EqlQueryFilterResourceShiftOffers>;

  orderBy?: Maybe<EqlOrderByClauseResourceShiftOffers>;
}
export interface ShiftsShiftOffersArgs {
  filter?: Maybe<EqlQueryFilterShiftOfferShifts>;

  orderBy?: Maybe<EqlOrderByClauseShiftOfferShifts>;
}
export interface ShiftsTemplatedShiftsArgs {
  filter?: Maybe<EqlQueryFilterShifts>;

  orderBy?: Maybe<EqlOrderByClauseShifts>;
}
export interface TemplatedResourceShiftsTemplatedShiftsArgs {
  filter?: Maybe<EqlQueryFilterTemplatedResourceShifts>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedResourceShifts>;
}
export interface TemplatedShiftTagsTemplatedShiftsArgs {
  filter?: Maybe<EqlQueryFilterTemplatedShiftTags>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedShiftTags>;
}
export interface ActivitiesTemplatedActivitiesArgs {
  filter?: Maybe<EqlQueryFilterActivities>;

  orderBy?: Maybe<EqlOrderByClauseActivities>;
}
export interface TemplatedActivityResourcesTemplatedActivitiesArgs {
  filter?: Maybe<EqlQueryFilterTemplatedActivityResources>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedActivityResources>;
}
export interface JobsTemplatedJobsArgs {
  filter?: Maybe<EqlQueryFilterJobs>;

  orderBy?: Maybe<EqlOrderByClauseJobs>;
}
export interface TemplatedAttendeesTemplatedJobsArgs {
  filter?: Maybe<EqlQueryFilterTemplatedAttendees>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedAttendees>;
}
export interface TemplatedJobAllocationsTemplatedJobsArgs {
  filter?: Maybe<EqlQueryFilterTemplatedJobAllocations>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedJobAllocations>;
}
export interface TemplatedJobDependenciesFromTemplatedJobsArgs {
  filter?: Maybe<EqlQueryFilterTemplatedJobDependencies>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedJobDependencies>;
}
export interface TemplatedJobDependenciesToTemplatedJobsArgs {
  filter?: Maybe<EqlQueryFilterTemplatedJobDependencies>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedJobDependencies>;
}
export interface TemplatedJobProductsTemplatedJobsArgs {
  filter?: Maybe<EqlQueryFilterTemplatedJobProducts>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedJobProducts>;
}
export interface TemplatedJobTagsTemplatedJobsArgs {
  filter?: Maybe<EqlQueryFilterTemplatedJobTags>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedJobTags>;
}
export interface TemplatedJobTasksTemplatedJobsArgs {
  filter?: Maybe<EqlQueryFilterTemplatedJobTasks>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedJobTasks>;
}
export interface TemplatedJobTimeConstraintsTemplatedJobsArgs {
  filter?: Maybe<EqlQueryFilterTemplatedJobTimeConstraints>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedJobTimeConstraints>;
}
export interface TemplatedResourceRequirementsTemplatedJobsArgs {
  filter?: Maybe<EqlQueryFilterTemplatedResourceRequirements>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedResourceRequirements>;
}
export interface TemplatedJobAllocationsTemplatedResourceRequirementsArgs {
  filter?: Maybe<EqlQueryFilterTemplatedJobAllocations>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedJobAllocations>;
}
export interface TemplatedTagsTemplatedResourceRequirementsArgs {
  filter?: Maybe<EqlQueryFilterTemplatedResourceRequirementTags>;

  orderBy?: Maybe<EqlOrderByClauseTemplatedResourceRequirementTags>;
}
export interface ResourcesAvailabilityPatternsArgs {
  filter?: Maybe<EqlQueryFilterAvailabilityPatternResources>;

  orderBy?: Maybe<EqlOrderByClauseAvailabilityPatternResources>;
}
export interface ResourceOverrideRegionsResourceOverridesArgs {
  filter?: Maybe<EqlQueryFilterResourceOverrideRegions>;

  orderBy?: Maybe<EqlOrderByClauseResourceOverrideRegions>;
}
export interface AvailabilityTemplateEntriesAvailabilityTemplatesArgs {
  filter?: Maybe<EqlQueryFilterAvailabilityTemplateEntries>;

  orderBy?: Maybe<EqlOrderByClauseAvailabilityTemplateEntries>;
}
export interface ResourcesAvailabilityTemplatesArgs {
  filter?: Maybe<EqlQueryFilterAvailabilityTemplateResources>;

  orderBy?: Maybe<EqlOrderByClauseAvailabilityTemplateResources>;
}
export interface HolidayRegionsHolidaysArgs {
  filter?: Maybe<EqlQueryFilterHolidayRegions>;

  orderBy?: Maybe<EqlOrderByClauseHolidayRegions>;
}
export interface DeleteAccountResourceScoresSchemaMutationArgs {
  UID: string;
}
export interface DeleteAccountTagsSchemaMutationArgs {
  UID: string;
}
export interface DeleteAccountsSchemaMutationArgs {
  UID: string;
}
export interface DeleteActivitiesSchemaMutationArgs {
  UID: string;
}
export interface DeleteActivityResourcesSchemaMutationArgs {
  UID: string;
}
export interface DeleteAttendeesSchemaMutationArgs {
  UID: string;
}
export interface DeleteAvailabilitiesSchemaMutationArgs {
  UID: string;
}
export interface DeleteAvailabilityPatternResourcesSchemaMutationArgs {
  UID: string;
}
export interface DeleteAvailabilityPatternsSchemaMutationArgs {
  UID: string;
}
export interface DeleteAvailabilityTemplateEntriesSchemaMutationArgs {
  UID: string;
}
export interface DeleteAvailabilityTemplateResourcesSchemaMutationArgs {
  UID: string;
}
export interface DeleteAvailabilityTemplatesSchemaMutationArgs {
  UID: string;
}
export interface DeleteClientAvailabilitiesSchemaMutationArgs {
  UID: string;
}
export interface DeleteContactTagsSchemaMutationArgs {
  UID: string;
}
export interface DeleteContactsSchemaMutationArgs {
  UID: string;
}
export interface DeleteEduMeSettingsSchemaMutationArgs {
  UID: string;
}
export interface DeleteErrorLogsSchemaMutationArgs {
  UID: string;
}
export interface DeleteHolidayRegionsSchemaMutationArgs {
  UID: string;
}
export interface DeleteHolidaysSchemaMutationArgs {
  UID: string;
}
export interface DeleteJobAllocationsSchemaMutationArgs {
  UID: string;
}
export interface DeleteJobDependenciesSchemaMutationArgs {
  UID: string;
}
export interface DeleteJobOffersSchemaMutationArgs {
  UID: string;
}
export interface DeleteJobProductsSchemaMutationArgs {
  UID: string;
}
export interface DeleteJobTagsSchemaMutationArgs {
  UID: string;
}
export interface DeleteJobTasksSchemaMutationArgs {
  UID: string;
}
export interface DeleteJobTimeConstraintsSchemaMutationArgs {
  UID: string;
}
export interface DeleteJobsSchemaMutationArgs {
  UID: string;
}
export interface DeleteLocationResourceScoresSchemaMutationArgs {
  UID: string;
}
export interface DeleteLocationsSchemaMutationArgs {
  UID: string;
}
export interface DeleteProductsSchemaMutationArgs {
  UID: string;
}
export interface DeleteRecurringSchedulesSchemaMutationArgs {
  UID: string;
}
export interface DeleteRegionsSchemaMutationArgs {
  UID: string;
}
export interface DeleteResourceJobOffersSchemaMutationArgs {
  UID: string;
}
export interface DeleteResourceOverrideRegionsSchemaMutationArgs {
  UID: string;
}
export interface DeleteResourceOverridesSchemaMutationArgs {
  UID: string;
}
export interface DeleteResourceRegionsSchemaMutationArgs {
  UID: string;
}
export interface DeleteResourceRequirementTagsSchemaMutationArgs {
  UID: string;
}
export interface DeleteResourceRequirementsSchemaMutationArgs {
  UID: string;
}
export interface DeleteResourceShiftBreaksSchemaMutationArgs {
  UID: string;
}
export interface DeleteResourceShiftOffersSchemaMutationArgs {
  UID: string;
}
export interface DeleteResourceShiftsSchemaMutationArgs {
  UID: string;
}
export interface DeleteResourceTagsSchemaMutationArgs {
  UID: string;
}
export interface DeleteResourcesSchemaMutationArgs {
  UID: string;
}
export interface DeleteScheduleTemplatesSchemaMutationArgs {
  UID: string;
}
export interface DeleteShiftOfferShiftsSchemaMutationArgs {
  UID: string;
}
export interface DeleteShiftOffersSchemaMutationArgs {
  UID: string;
}
export interface DeleteShiftTagsSchemaMutationArgs {
  UID: string;
}
export interface DeleteShiftsSchemaMutationArgs {
  UID: string;
}
export interface DeleteTagsSchemaMutationArgs {
  UID: string;
}
export interface DeleteTemplatedActivitiesSchemaMutationArgs {
  UID: string;
}
export interface DeleteTemplatedActivityResourcesSchemaMutationArgs {
  UID: string;
}
export interface DeleteTemplatedAttendeesSchemaMutationArgs {
  UID: string;
}
export interface DeleteTemplatedJobAllocationsSchemaMutationArgs {
  UID: string;
}
export interface DeleteTemplatedJobDependenciesSchemaMutationArgs {
  UID: string;
}
export interface DeleteTemplatedJobProductsSchemaMutationArgs {
  UID: string;
}
export interface DeleteTemplatedJobTagsSchemaMutationArgs {
  UID: string;
}
export interface DeleteTemplatedJobTasksSchemaMutationArgs {
  UID: string;
}
export interface DeleteTemplatedJobTimeConstraintsSchemaMutationArgs {
  UID: string;
}
export interface DeleteTemplatedJobsSchemaMutationArgs {
  UID: string;
}
export interface DeleteTemplatedResourceRequirementTagsSchemaMutationArgs {
  UID: string;
}
export interface DeleteTemplatedResourceRequirementsSchemaMutationArgs {
  UID: string;
}
export interface DeleteTemplatedResourceShiftsSchemaMutationArgs {
  UID: string;
}
export interface DeleteTemplatedShiftTagsSchemaMutationArgs {
  UID: string;
}
export interface DeleteTemplatedShiftsSchemaMutationArgs {
  UID: string;
}
export interface DeleteUserRegionsSchemaMutationArgs {
  UID: string;
}
export interface GetAccountResourceScoresSchemaMutationArgs {
  id: string;
}
export interface GetAccountTagsSchemaMutationArgs {
  id: string;
}
export interface GetAccountsSchemaMutationArgs {
  id: string;
}
export interface GetActivitiesSchemaMutationArgs {
  id: string;
}
export interface GetActivityResourcesSchemaMutationArgs {
  id: string;
}
export interface GetAttendeesSchemaMutationArgs {
  id: string;
}
export interface GetAvailabilitiesSchemaMutationArgs {
  id: string;
}
export interface GetAvailabilityPatternResourcesSchemaMutationArgs {
  id: string;
}
export interface GetAvailabilityPatternsSchemaMutationArgs {
  id: string;
}
export interface GetAvailabilityTemplateEntriesSchemaMutationArgs {
  id: string;
}
export interface GetAvailabilityTemplateResourcesSchemaMutationArgs {
  id: string;
}
export interface GetAvailabilityTemplatesSchemaMutationArgs {
  id: string;
}
export interface GetClientAvailabilitiesSchemaMutationArgs {
  id: string;
}
export interface GetContactTagsSchemaMutationArgs {
  id: string;
}
export interface GetContactsSchemaMutationArgs {
  id: string;
}
export interface GetEduMeSettingsSchemaMutationArgs {
  id: string;
}
export interface GetErrorLogsSchemaMutationArgs {
  id: string;
}
export interface GetHolidayRegionsSchemaMutationArgs {
  id: string;
}
export interface GetHolidaysSchemaMutationArgs {
  id: string;
}
export interface GetJobAllocationsSchemaMutationArgs {
  id: string;
}
export interface GetJobDependenciesSchemaMutationArgs {
  id: string;
}
export interface GetJobOffersSchemaMutationArgs {
  id: string;
}
export interface GetJobProductsSchemaMutationArgs {
  id: string;
}
export interface GetJobTagsSchemaMutationArgs {
  id: string;
}
export interface GetJobTasksSchemaMutationArgs {
  id: string;
}
export interface GetJobTimeConstraintsSchemaMutationArgs {
  id: string;
}
export interface GetJobsSchemaMutationArgs {
  id: string;
}
export interface GetLocationResourceScoresSchemaMutationArgs {
  id: string;
}
export interface GetLocationsSchemaMutationArgs {
  id: string;
}
export interface GetProductsSchemaMutationArgs {
  id: string;
}
export interface GetRecurringSchedulesSchemaMutationArgs {
  id: string;
}
export interface GetRegionsSchemaMutationArgs {
  id: string;
}
export interface GetResourceJobOffersSchemaMutationArgs {
  id: string;
}
export interface GetResourceOverrideRegionsSchemaMutationArgs {
  id: string;
}
export interface GetResourceOverridesSchemaMutationArgs {
  id: string;
}
export interface GetResourceRegionsSchemaMutationArgs {
  id: string;
}
export interface GetResourceRequirementTagsSchemaMutationArgs {
  id: string;
}
export interface GetResourceRequirementsSchemaMutationArgs {
  id: string;
}
export interface GetResourceShiftBreaksSchemaMutationArgs {
  id: string;
}
export interface GetResourceShiftOffersSchemaMutationArgs {
  id: string;
}
export interface GetResourceShiftsSchemaMutationArgs {
  id: string;
}
export interface GetResourceTagsSchemaMutationArgs {
  id: string;
}
export interface GetResourcesSchemaMutationArgs {
  id: string;
}
export interface GetScheduleTemplatesSchemaMutationArgs {
  id: string;
}
export interface GetShiftOfferShiftsSchemaMutationArgs {
  id: string;
}
export interface GetShiftOffersSchemaMutationArgs {
  id: string;
}
export interface GetShiftTagsSchemaMutationArgs {
  id: string;
}
export interface GetShiftsSchemaMutationArgs {
  id: string;
}
export interface GetTagsSchemaMutationArgs {
  id: string;
}
export interface GetTemplatedActivitiesSchemaMutationArgs {
  id: string;
}
export interface GetTemplatedActivityResourcesSchemaMutationArgs {
  id: string;
}
export interface GetTemplatedAttendeesSchemaMutationArgs {
  id: string;
}
export interface GetTemplatedJobAllocationsSchemaMutationArgs {
  id: string;
}
export interface GetTemplatedJobDependenciesSchemaMutationArgs {
  id: string;
}
export interface GetTemplatedJobProductsSchemaMutationArgs {
  id: string;
}
export interface GetTemplatedJobTagsSchemaMutationArgs {
  id: string;
}
export interface GetTemplatedJobTasksSchemaMutationArgs {
  id: string;
}
export interface GetTemplatedJobTimeConstraintsSchemaMutationArgs {
  id: string;
}
export interface GetTemplatedJobsSchemaMutationArgs {
  id: string;
}
export interface GetTemplatedResourceRequirementTagsSchemaMutationArgs {
  id: string;
}
export interface GetTemplatedResourceRequirementsSchemaMutationArgs {
  id: string;
}
export interface GetTemplatedResourceShiftsSchemaMutationArgs {
  id: string;
}
export interface GetTemplatedShiftTagsSchemaMutationArgs {
  id: string;
}
export interface GetTemplatedShiftsSchemaMutationArgs {
  id: string;
}
export interface GetUserRegionsSchemaMutationArgs {
  id: string;
}
export interface InsertAccountResourceScoresSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewAccountResourceScores;
}
export interface InsertAccountTagsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewAccountTags;
}
export interface InsertAccountsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewAccounts;
}
export interface InsertActivitiesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewActivities;
}
export interface InsertActivityResourcesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewActivityResources;
}
export interface InsertAttendeesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewAttendees;
}
export interface InsertAvailabilitiesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewAvailabilities;
}
export interface InsertAvailabilityPatternResourcesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewAvailabilityPatternResources;
}
export interface InsertAvailabilityPatternsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewAvailabilityPatterns;
}
export interface InsertAvailabilityTemplateEntriesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewAvailabilityTemplateEntries;
}
export interface InsertAvailabilityTemplateResourcesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewAvailabilityTemplateResources;
}
export interface InsertAvailabilityTemplatesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewAvailabilityTemplates;
}
export interface InsertClientAvailabilitiesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewClientAvailabilities;
}
export interface InsertContactTagsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewContactTags;
}
export interface InsertContactsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewContacts;
}
export interface InsertEduMeSettingsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewEduMeSettings;
}
export interface InsertErrorLogsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewErrorLogs;
}
export interface InsertHolidayRegionsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewHolidayRegions;
}
export interface InsertHolidaysSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewHolidays;
}
export interface InsertJobAllocationsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewJobAllocations;
}
export interface InsertJobDependenciesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewJobDependencies;
}
export interface InsertJobOffersSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewJobOffers;
}
export interface InsertJobProductsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewJobProducts;
}
export interface InsertJobTagsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewJobTags;
}
export interface InsertJobTasksSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewJobTasks;
}
export interface InsertJobTimeConstraintsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewJobTimeConstraints;
}
export interface InsertJobsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewJobs;
}
export interface InsertLocationResourceScoresSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewLocationResourceScores;
}
export interface InsertLocationsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewLocations;
}
export interface InsertProductsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewProducts;
}
export interface InsertRecurringSchedulesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewRecurringSchedules;
}
export interface InsertRegionsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewRegions;
}
export interface InsertResourceJobOffersSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewResourceJobOffers;
}
export interface InsertResourceOverrideRegionsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewResourceOverrideRegions;
}
export interface InsertResourceOverridesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewResourceOverrides;
}
export interface InsertResourceRegionsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewResourceRegions;
}
export interface InsertResourceRequirementTagsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewResourceRequirementTags;
}
export interface InsertResourceRequirementsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewResourceRequirements;
}
export interface InsertResourceShiftBreaksSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewResourceShiftBreaks;
}
export interface InsertResourceShiftOffersSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewResourceShiftOffers;
}
export interface InsertResourceShiftsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewResourceShifts;
}
export interface InsertResourceTagsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewResourceTags;
}
export interface InsertResourcesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewResources;
}
export interface InsertScheduleTemplatesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewScheduleTemplates;
}
export interface InsertShiftOfferShiftsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewShiftOfferShifts;
}
export interface InsertShiftOffersSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewShiftOffers;
}
export interface InsertShiftTagsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewShiftTags;
}
export interface InsertShiftsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewShifts;
}
export interface InsertTagsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewTags;
}
export interface InsertTemplatedActivitiesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewTemplatedActivities;
}
export interface InsertTemplatedActivityResourcesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewTemplatedActivityResources;
}
export interface InsertTemplatedAttendeesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewTemplatedAttendees;
}
export interface InsertTemplatedJobAllocationsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewTemplatedJobAllocations;
}
export interface InsertTemplatedJobDependenciesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewTemplatedJobDependencies;
}
export interface InsertTemplatedJobProductsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewTemplatedJobProducts;
}
export interface InsertTemplatedJobTagsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewTemplatedJobTags;
}
export interface InsertTemplatedJobTasksSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewTemplatedJobTasks;
}
export interface InsertTemplatedJobTimeConstraintsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewTemplatedJobTimeConstraints;
}
export interface InsertTemplatedJobsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewTemplatedJobs;
}
export interface InsertTemplatedResourceRequirementTagsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewTemplatedResourceRequirementTags;
}
export interface InsertTemplatedResourceRequirementsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewTemplatedResourceRequirements;
}
export interface InsertTemplatedResourceShiftsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewTemplatedResourceShifts;
}
export interface InsertTemplatedShiftTagsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewTemplatedShiftTags;
}
export interface InsertTemplatedShiftsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewTemplatedShifts;
}
export interface InsertUserRegionsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: NewUserRegions;
}
export interface UpdateAccountResourceScoresSchemaMutationArgs {
  input: UpdateAccountResourceScores;
}
export interface UpdateAccountTagsSchemaMutationArgs {
  input: UpdateAccountTags;
}
export interface UpdateAccountsSchemaMutationArgs {
  input: UpdateAccounts;
}
export interface UpdateActivitiesSchemaMutationArgs {
  input: UpdateActivities;
}
export interface UpdateActivityResourcesSchemaMutationArgs {
  input: UpdateActivityResources;
}
export interface UpdateAttendeesSchemaMutationArgs {
  input: UpdateAttendees;
}
export interface UpdateAvailabilitiesSchemaMutationArgs {
  input: UpdateAvailabilities;
}
export interface UpdateAvailabilityPatternResourcesSchemaMutationArgs {
  input: UpdateAvailabilityPatternResources;
}
export interface UpdateAvailabilityPatternsSchemaMutationArgs {
  input: UpdateAvailabilityPatterns;
}
export interface UpdateAvailabilityTemplateEntriesSchemaMutationArgs {
  input: UpdateAvailabilityTemplateEntries;
}
export interface UpdateAvailabilityTemplateResourcesSchemaMutationArgs {
  input: UpdateAvailabilityTemplateResources;
}
export interface UpdateAvailabilityTemplatesSchemaMutationArgs {
  input: UpdateAvailabilityTemplates;
}
export interface UpdateClientAvailabilitiesSchemaMutationArgs {
  input: UpdateClientAvailabilities;
}
export interface UpdateContactTagsSchemaMutationArgs {
  input: UpdateContactTags;
}
export interface UpdateContactsSchemaMutationArgs {
  input: UpdateContacts;
}
export interface UpdateEduMeSettingsSchemaMutationArgs {
  input: UpdateEduMeSettings;
}
export interface UpdateErrorLogsSchemaMutationArgs {
  input: UpdateErrorLogs;
}
export interface UpdateHolidayRegionsSchemaMutationArgs {
  input: UpdateHolidayRegions;
}
export interface UpdateHolidaysSchemaMutationArgs {
  input: UpdateHolidays;
}
export interface UpdateJobAllocationsSchemaMutationArgs {
  input: UpdateJobAllocations;
}
export interface UpdateJobDependenciesSchemaMutationArgs {
  input: UpdateJobDependencies;
}
export interface UpdateJobOffersSchemaMutationArgs {
  input: UpdateJobOffers;
}
export interface UpdateJobProductsSchemaMutationArgs {
  input: UpdateJobProducts;
}
export interface UpdateJobTagsSchemaMutationArgs {
  input: UpdateJobTags;
}
export interface UpdateJobTasksSchemaMutationArgs {
  input: UpdateJobTasks;
}
export interface UpdateJobTimeConstraintsSchemaMutationArgs {
  input: UpdateJobTimeConstraints;
}
export interface UpdateJobsSchemaMutationArgs {
  input: UpdateJobs;
}
export interface UpdateLocationResourceScoresSchemaMutationArgs {
  input: UpdateLocationResourceScores;
}
export interface UpdateLocationsSchemaMutationArgs {
  input: UpdateLocations;
}
export interface UpdateProductsSchemaMutationArgs {
  input: UpdateProducts;
}
export interface UpdateRecurringSchedulesSchemaMutationArgs {
  input: UpdateRecurringSchedules;
}
export interface UpdateRegionsSchemaMutationArgs {
  input: UpdateRegions;
}
export interface UpdateResourceJobOffersSchemaMutationArgs {
  input: UpdateResourceJobOffers;
}
export interface UpdateResourceOverrideRegionsSchemaMutationArgs {
  input: UpdateResourceOverrideRegions;
}
export interface UpdateResourceOverridesSchemaMutationArgs {
  input: UpdateResourceOverrides;
}
export interface UpdateResourceRegionsSchemaMutationArgs {
  input: UpdateResourceRegions;
}
export interface UpdateResourceRequirementTagsSchemaMutationArgs {
  input: UpdateResourceRequirementTags;
}
export interface UpdateResourceRequirementsSchemaMutationArgs {
  input: UpdateResourceRequirements;
}
export interface UpdateResourceShiftBreaksSchemaMutationArgs {
  input: UpdateResourceShiftBreaks;
}
export interface UpdateResourceShiftOffersSchemaMutationArgs {
  input: UpdateResourceShiftOffers;
}
export interface UpdateResourceShiftsSchemaMutationArgs {
  input: UpdateResourceShifts;
}
export interface UpdateResourceTagsSchemaMutationArgs {
  input: UpdateResourceTags;
}
export interface UpdateResourcesSchemaMutationArgs {
  input: UpdateResources;
}
export interface UpdateScheduleTemplatesSchemaMutationArgs {
  input: UpdateScheduleTemplates;
}
export interface UpdateShiftOfferShiftsSchemaMutationArgs {
  input: UpdateShiftOfferShifts;
}
export interface UpdateShiftOffersSchemaMutationArgs {
  input: UpdateShiftOffers;
}
export interface UpdateShiftTagsSchemaMutationArgs {
  input: UpdateShiftTags;
}
export interface UpdateShiftsSchemaMutationArgs {
  input: UpdateShifts;
}
export interface UpdateTagsSchemaMutationArgs {
  input: UpdateTags;
}
export interface UpdateTemplatedActivitiesSchemaMutationArgs {
  input: UpdateTemplatedActivities;
}
export interface UpdateTemplatedActivityResourcesSchemaMutationArgs {
  input: UpdateTemplatedActivityResources;
}
export interface UpdateTemplatedAttendeesSchemaMutationArgs {
  input: UpdateTemplatedAttendees;
}
export interface UpdateTemplatedJobAllocationsSchemaMutationArgs {
  input: UpdateTemplatedJobAllocations;
}
export interface UpdateTemplatedJobDependenciesSchemaMutationArgs {
  input: UpdateTemplatedJobDependencies;
}
export interface UpdateTemplatedJobProductsSchemaMutationArgs {
  input: UpdateTemplatedJobProducts;
}
export interface UpdateTemplatedJobTagsSchemaMutationArgs {
  input: UpdateTemplatedJobTags;
}
export interface UpdateTemplatedJobTasksSchemaMutationArgs {
  input: UpdateTemplatedJobTasks;
}
export interface UpdateTemplatedJobTimeConstraintsSchemaMutationArgs {
  input: UpdateTemplatedJobTimeConstraints;
}
export interface UpdateTemplatedJobsSchemaMutationArgs {
  input: UpdateTemplatedJobs;
}
export interface UpdateTemplatedResourceRequirementTagsSchemaMutationArgs {
  input: UpdateTemplatedResourceRequirementTags;
}
export interface UpdateTemplatedResourceRequirementsSchemaMutationArgs {
  input: UpdateTemplatedResourceRequirements;
}
export interface UpdateTemplatedResourceShiftsSchemaMutationArgs {
  input: UpdateTemplatedResourceShifts;
}
export interface UpdateTemplatedShiftTagsSchemaMutationArgs {
  input: UpdateTemplatedShiftTags;
}
export interface UpdateTemplatedShiftsSchemaMutationArgs {
  input: UpdateTemplatedShifts;
}
export interface UpdateUserRegionsSchemaMutationArgs {
  input: UpdateUserRegions;
}
export interface UpsertAccountResourceScoresSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertAccountResourceScores;

  keyField: string;
}
export interface UpsertAccountTagsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertAccountTags;

  keyField: string;
}
export interface UpsertAccountsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertAccounts;

  keyField: string;
}
export interface UpsertActivitiesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertActivities;

  keyField: string;
}
export interface UpsertActivityResourcesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertActivityResources;

  keyField: string;
}
export interface UpsertAttendeesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertAttendees;

  keyField: string;
}
export interface UpsertAvailabilitiesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertAvailabilities;

  keyField: string;
}
export interface UpsertAvailabilityPatternResourcesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertAvailabilityPatternResources;

  keyField: string;
}
export interface UpsertAvailabilityPatternsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertAvailabilityPatterns;

  keyField: string;
}
export interface UpsertAvailabilityTemplateEntriesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertAvailabilityTemplateEntries;

  keyField: string;
}
export interface UpsertAvailabilityTemplateResourcesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertAvailabilityTemplateResources;

  keyField: string;
}
export interface UpsertAvailabilityTemplatesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertAvailabilityTemplates;

  keyField: string;
}
export interface UpsertClientAvailabilitiesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertClientAvailabilities;

  keyField: string;
}
export interface UpsertContactTagsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertContactTags;

  keyField: string;
}
export interface UpsertContactsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertContacts;

  keyField: string;
}
export interface UpsertEduMeSettingsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertEduMeSettings;

  keyField: string;
}
export interface UpsertErrorLogsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertErrorLogs;

  keyField: string;
}
export interface UpsertHolidayRegionsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertHolidayRegions;

  keyField: string;
}
export interface UpsertHolidaysSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertHolidays;

  keyField: string;
}
export interface UpsertJobAllocationsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertJobAllocations;

  keyField: string;
}
export interface UpsertJobDependenciesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertJobDependencies;

  keyField: string;
}
export interface UpsertJobOffersSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertJobOffers;

  keyField: string;
}
export interface UpsertJobProductsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertJobProducts;

  keyField: string;
}
export interface UpsertJobTagsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertJobTags;

  keyField: string;
}
export interface UpsertJobTasksSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertJobTasks;

  keyField: string;
}
export interface UpsertJobTimeConstraintsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertJobTimeConstraints;

  keyField: string;
}
export interface UpsertJobsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertJobs;

  keyField: string;
}
export interface UpsertLocationResourceScoresSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertLocationResourceScores;

  keyField: string;
}
export interface UpsertLocationsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertLocations;

  keyField: string;
}
export interface UpsertProductsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertProducts;

  keyField: string;
}
export interface UpsertRecurringSchedulesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertRecurringSchedules;

  keyField: string;
}
export interface UpsertRegionsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertRegions;

  keyField: string;
}
export interface UpsertResourceJobOffersSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertResourceJobOffers;

  keyField: string;
}
export interface UpsertResourceOverrideRegionsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertResourceOverrideRegions;

  keyField: string;
}
export interface UpsertResourceOverridesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertResourceOverrides;

  keyField: string;
}
export interface UpsertResourceRegionsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertResourceRegions;

  keyField: string;
}
export interface UpsertResourceRequirementTagsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertResourceRequirementTags;

  keyField: string;
}
export interface UpsertResourceRequirementsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertResourceRequirements;

  keyField: string;
}
export interface UpsertResourceShiftBreaksSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertResourceShiftBreaks;

  keyField: string;
}
export interface UpsertResourceShiftOffersSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertResourceShiftOffers;

  keyField: string;
}
export interface UpsertResourceShiftsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertResourceShifts;

  keyField: string;
}
export interface UpsertResourceTagsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertResourceTags;

  keyField: string;
}
export interface UpsertResourcesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertResources;

  keyField: string;
}
export interface UpsertScheduleTemplatesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertScheduleTemplates;

  keyField: string;
}
export interface UpsertShiftOfferShiftsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertShiftOfferShifts;

  keyField: string;
}
export interface UpsertShiftOffersSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertShiftOffers;

  keyField: string;
}
export interface UpsertShiftTagsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertShiftTags;

  keyField: string;
}
export interface UpsertShiftsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertShifts;

  keyField: string;
}
export interface UpsertTagsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertTags;

  keyField: string;
}
export interface UpsertTemplatedActivitiesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertTemplatedActivities;

  keyField: string;
}
export interface UpsertTemplatedActivityResourcesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertTemplatedActivityResources;

  keyField: string;
}
export interface UpsertTemplatedAttendeesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertTemplatedAttendees;

  keyField: string;
}
export interface UpsertTemplatedJobAllocationsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertTemplatedJobAllocations;

  keyField: string;
}
export interface UpsertTemplatedJobDependenciesSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertTemplatedJobDependencies;

  keyField: string;
}
export interface UpsertTemplatedJobProductsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertTemplatedJobProducts;

  keyField: string;
}
export interface UpsertTemplatedJobTagsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertTemplatedJobTags;

  keyField: string;
}
export interface UpsertTemplatedJobTasksSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertTemplatedJobTasks;

  keyField: string;
}
export interface UpsertTemplatedJobTimeConstraintsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertTemplatedJobTimeConstraints;

  keyField: string;
}
export interface UpsertTemplatedJobsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertTemplatedJobs;

  keyField: string;
}
export interface UpsertTemplatedResourceRequirementTagsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertTemplatedResourceRequirementTags;

  keyField: string;
}
export interface UpsertTemplatedResourceRequirementsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertTemplatedResourceRequirements;

  keyField: string;
}
export interface UpsertTemplatedResourceShiftsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertTemplatedResourceShifts;

  keyField: string;
}
export interface UpsertTemplatedShiftTagsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertTemplatedShiftTags;

  keyField: string;
}
export interface UpsertTemplatedShiftsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertTemplatedShifts;

  keyField: string;
}
export interface UpsertUserRegionsSchemaMutationArgs {
  idAlias?: Maybe<string>;

  input: UpsertUserRegions;

  keyField: string;
}
export interface SchemaJobProductsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterJobProducts>;

  extendedFilter?: Maybe<EqlRecordChangeFilterJobProducts>;
}
export interface SchemaTemplatedJobsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterTemplatedJobs>;

  extendedFilter?: Maybe<EqlRecordChangeFilterTemplatedJobs>;
}
export interface SchemaTagsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterTags>;

  extendedFilter?: Maybe<EqlRecordChangeFilterTags>;
}
export interface SchemaUserRegionsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterUserRegions>;

  extendedFilter?: Maybe<EqlRecordChangeFilterUserRegions>;
}
export interface SchemaResourceShiftsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterResourceShifts>;

  extendedFilter?: Maybe<EqlRecordChangeFilterResourceShifts>;
}
export interface SchemaTemplatedShiftsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterTemplatedShifts>;

  extendedFilter?: Maybe<EqlRecordChangeFilterTemplatedShifts>;
}
export interface SchemaJobAllocationsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterJobAllocations>;

  extendedFilter?: Maybe<EqlRecordChangeFilterJobAllocations>;
}
export interface SchemaResourceOverrideRegionsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterResourceOverrideRegions>;

  extendedFilter?: Maybe<EqlRecordChangeFilterResourceOverrideRegions>;
}
export interface SchemaJobsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterJobs>;

  extendedFilter?: Maybe<EqlRecordChangeFilterJobs>;
}
export interface SchemaResourceOverridesSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterResourceOverrides>;

  extendedFilter?: Maybe<EqlRecordChangeFilterResourceOverrides>;
}
export interface SchemaEduMeSettingsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterEduMeSettings>;

  extendedFilter?: Maybe<EqlRecordChangeFilterEduMeSettings>;
}
export interface SchemaShiftOffersSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterShiftOffers>;

  extendedFilter?: Maybe<EqlRecordChangeFilterShiftOffers>;
}
export interface SchemaRecurringSchedulesSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterRecurringSchedules>;

  extendedFilter?: Maybe<EqlRecordChangeFilterRecurringSchedules>;
}
export interface SchemaJobTagsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterJobTags>;

  extendedFilter?: Maybe<EqlRecordChangeFilterJobTags>;
}
export interface SchemaActivitiesSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterActivities>;

  extendedFilter?: Maybe<EqlRecordChangeFilterActivities>;
}
export interface SchemaTemplatedResourceRequirementsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterTemplatedResourceRequirements>;

  extendedFilter?: Maybe<EqlRecordChangeFilterTemplatedResourceRequirements>;
}
export interface SchemaTemplatedResourceRequirementTagsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterTemplatedResourceRequirementTags>;

  extendedFilter?: Maybe<EqlRecordChangeFilterTemplatedResourceRequirementTags>;
}
export interface SchemaAvailabilityTemplateResourcesSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterAvailabilityTemplateResources>;

  extendedFilter?: Maybe<EqlRecordChangeFilterAvailabilityTemplateResources>;
}
export interface SchemaActivityResourcesSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterActivityResources>;

  extendedFilter?: Maybe<EqlRecordChangeFilterActivityResources>;
}
export interface SchemaErrorLogsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterErrorLogs>;

  extendedFilter?: Maybe<EqlRecordChangeFilterErrorLogs>;
}
export interface SchemaResourceTagsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterResourceTags>;

  extendedFilter?: Maybe<EqlRecordChangeFilterResourceTags>;
}
export interface SchemaTemplatedActivitiesSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterTemplatedActivities>;

  extendedFilter?: Maybe<EqlRecordChangeFilterTemplatedActivities>;
}
export interface SchemaJobTimeConstraintsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterJobTimeConstraints>;

  extendedFilter?: Maybe<EqlRecordChangeFilterJobTimeConstraints>;
}
export interface SchemaJobOffersSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterJobOffers>;

  extendedFilter?: Maybe<EqlRecordChangeFilterJobOffers>;
}
export interface SchemaAvailabilitiesSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterAvailabilities>;

  extendedFilter?: Maybe<EqlRecordChangeFilterAvailabilities>;
}
export interface SchemaContactTagsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterContactTags>;

  extendedFilter?: Maybe<EqlRecordChangeFilterContactTags>;
}
export interface SchemaClientAvailabilitiesSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterClientAvailabilities>;

  extendedFilter?: Maybe<EqlRecordChangeFilterClientAvailabilities>;
}
export interface SchemaTemplatedJobAllocationsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterTemplatedJobAllocations>;

  extendedFilter?: Maybe<EqlRecordChangeFilterTemplatedJobAllocations>;
}
export interface SchemaAttendeesSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterAttendees>;

  extendedFilter?: Maybe<EqlRecordChangeFilterAttendees>;
}
export interface SchemaResourceRequirementTagsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterResourceRequirementTags>;

  extendedFilter?: Maybe<EqlRecordChangeFilterResourceRequirementTags>;
}
export interface SchemaShiftsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterShifts>;

  extendedFilter?: Maybe<EqlRecordChangeFilterShifts>;
}
export interface SchemaTemplatedActivityResourcesSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterTemplatedActivityResources>;

  extendedFilter?: Maybe<EqlRecordChangeFilterTemplatedActivityResources>;
}
export interface SchemaTemplatedJobDependenciesSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterTemplatedJobDependencies>;

  extendedFilter?: Maybe<EqlRecordChangeFilterTemplatedJobDependencies>;
}
export interface SchemaTemplatedJobProductsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterTemplatedJobProducts>;

  extendedFilter?: Maybe<EqlRecordChangeFilterTemplatedJobProducts>;
}
export interface SchemaShiftOfferShiftsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterShiftOfferShifts>;

  extendedFilter?: Maybe<EqlRecordChangeFilterShiftOfferShifts>;
}
export interface SchemaTemplatedJobTasksSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterTemplatedJobTasks>;

  extendedFilter?: Maybe<EqlRecordChangeFilterTemplatedJobTasks>;
}
export interface SchemaTemplatedJobTagsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterTemplatedJobTags>;

  extendedFilter?: Maybe<EqlRecordChangeFilterTemplatedJobTags>;
}
export interface SchemaResourceShiftOffersSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterResourceShiftOffers>;

  extendedFilter?: Maybe<EqlRecordChangeFilterResourceShiftOffers>;
}
export interface SchemaShiftTagsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterShiftTags>;

  extendedFilter?: Maybe<EqlRecordChangeFilterShiftTags>;
}
export interface SchemaLocationsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterLocations>;

  extendedFilter?: Maybe<EqlRecordChangeFilterLocations>;
}
export interface SchemaTemplatedShiftTagsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterTemplatedShiftTags>;

  extendedFilter?: Maybe<EqlRecordChangeFilterTemplatedShiftTags>;
}
export interface SchemaTemplatedJobTimeConstraintsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterTemplatedJobTimeConstraints>;

  extendedFilter?: Maybe<EqlRecordChangeFilterTemplatedJobTimeConstraints>;
}
export interface SchemaResourceShiftBreaksSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterResourceShiftBreaks>;

  extendedFilter?: Maybe<EqlRecordChangeFilterResourceShiftBreaks>;
}
export interface SchemaTemplatedAttendeesSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterTemplatedAttendees>;

  extendedFilter?: Maybe<EqlRecordChangeFilterTemplatedAttendees>;
}
export interface SchemaAccountTagsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterAccountTags>;

  extendedFilter?: Maybe<EqlRecordChangeFilterAccountTags>;
}
export interface SchemaRegionsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterRegions>;

  extendedFilter?: Maybe<EqlRecordChangeFilterRegions>;
}
export interface SchemaJobDependenciesSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterJobDependencies>;

  extendedFilter?: Maybe<EqlRecordChangeFilterJobDependencies>;
}
export interface SchemaScheduleTemplatesSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterScheduleTemplates>;

  extendedFilter?: Maybe<EqlRecordChangeFilterScheduleTemplates>;
}
export interface SchemaUsersSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterUsers>;

  extendedFilter?: Maybe<EqlRecordChangeFilterUsers>;
}
export interface SchemaResourcesSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterResources>;

  extendedFilter?: Maybe<EqlRecordChangeFilterResources>;
}
export interface SchemaHolidayRegionsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterHolidayRegions>;

  extendedFilter?: Maybe<EqlRecordChangeFilterHolidayRegions>;
}
export interface SchemaAvailabilityTemplatesSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterAvailabilityTemplates>;

  extendedFilter?: Maybe<EqlRecordChangeFilterAvailabilityTemplates>;
}
export interface SchemaResourceJobOffersSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterResourceJobOffers>;

  extendedFilter?: Maybe<EqlRecordChangeFilterResourceJobOffers>;
}
export interface SchemaAccountsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterAccounts>;

  extendedFilter?: Maybe<EqlRecordChangeFilterAccounts>;
}
export interface SchemaTemplatedResourceShiftsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterTemplatedResourceShifts>;

  extendedFilter?: Maybe<EqlRecordChangeFilterTemplatedResourceShifts>;
}
export interface SchemaAvailabilityPatternsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterAvailabilityPatterns>;

  extendedFilter?: Maybe<EqlRecordChangeFilterAvailabilityPatterns>;
}
export interface SchemaAvailabilityPatternResourcesSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterAvailabilityPatternResources>;

  extendedFilter?: Maybe<EqlRecordChangeFilterAvailabilityPatternResources>;
}
export interface SchemaAvailabilityTemplateEntriesSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterAvailabilityTemplateEntries>;

  extendedFilter?: Maybe<EqlRecordChangeFilterAvailabilityTemplateEntries>;
}
export interface SchemaAccountResourceScoresSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterAccountResourceScores>;

  extendedFilter?: Maybe<EqlRecordChangeFilterAccountResourceScores>;
}
export interface SchemaContactsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterContacts>;

  extendedFilter?: Maybe<EqlRecordChangeFilterContacts>;
}
export interface SchemaProductsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterProducts>;

  extendedFilter?: Maybe<EqlRecordChangeFilterProducts>;
}
export interface SchemaJobTasksSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterJobTasks>;

  extendedFilter?: Maybe<EqlRecordChangeFilterJobTasks>;
}
export interface SchemaHolidaysSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterHolidays>;

  extendedFilter?: Maybe<EqlRecordChangeFilterHolidays>;
}
export interface SchemaResourceRequirementsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterResourceRequirements>;

  extendedFilter?: Maybe<EqlRecordChangeFilterResourceRequirements>;
}
export interface SchemaLocationResourceScoresSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterLocationResourceScores>;

  extendedFilter?: Maybe<EqlRecordChangeFilterLocationResourceScores>;
}
export interface SchemaResourceRegionsSubscriptionArgs {
  operation?: Maybe<SchemaSubscriptionOp[]>;

  filter?: Maybe<EqlRecordFilterResourceRegions>;

  extendedFilter?: Maybe<EqlRecordChangeFilterResourceRegions>;
}

// ====================================================
// Unions
// ====================================================

/** Possible object types a `Notifications` object can refer to */
export type NotificationsObject =
  | Jobs
  | ResourceJobOffers
  | Shifts
  | ResourceShiftOffers;
