import { DetailedHTMLProps, HTMLAttributes, ImgHTMLAttributes } from 'react';

export interface IDivAttributes extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export interface IImageAttributes extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {}

export interface IPAttributes extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {}

export interface IHeadingAttributes extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {}

export interface IDividerAttributes extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {}
