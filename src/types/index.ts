import type React from 'react'

export interface IFooterLinks {
  icon?: React.ReactElement
  label: string
  path: string
}

export enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  OurClasses = 'ourclasses',
  ContactUs = 'contactus',
}
