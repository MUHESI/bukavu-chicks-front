import React, { type PropsWithChildren, useEffect, useState } from 'react'
import Dialog, { type DialogProps } from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import { type SelectChangeEvent } from '@mui/material/Select'
import { AiOutlineCloseCircle } from 'react-icons/ai'

export const commonClassNameBtnLastBtnDialog =
  'border-green-400 bg-green-400 hover:bg-white hover:text-green-400 text-white'

export const closeDialog = () => Math.random()

export interface ILastBtnOptions {
  btnText: string
  onClick?: () => void
  closeAfterAction?: boolean
  classNameBtn?: string
}
export interface IMainBtnOptions {
  useBtn?: boolean
  useIcon?: boolean
  btnText?: string
  iconText?: string
  icon?: React.ReactElement
  classNameBtn?: string
}

interface IDataPropos {
  width: DialogProps['maxWidth']
  mainTitle: string
  lastBtnOptions?: ILastBtnOptions
  mainBtnOptions?: IMainBtnOptions
  openDilog?: number
}

export default function DialogCustom ({
  width,
  children,
  mainTitle,
  lastBtnOptions,
  mainBtnOptions,
  openDilog
}: PropsWithChildren<IDataPropos>) {
  const [open, setOpen] = React.useState(false)
  const [fullWidth, setFullWidth] = React.useState(true)
  const [maxWidth, setMaxWidth] =
    React.useState<DialogProps['maxWidth']>(width)

  useEffect(() => {
    if (openDilog !== 0) {
      setOpen(false)
    }
  }, [openDilog])

  const handleClickOpen = () => {
    // setOpenDilog(true);
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
    // setOpenDilog(false);
  }
  const handleMaxWidthChange = (event: SelectChangeEvent<typeof maxWidth>) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value
    )
  }
  const handleFullWidthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFullWidth(event.target.checked)
  }

  const handleLastBtn = () => {
    if (lastBtnOptions?.onClick) {
      lastBtnOptions?.onClick()
    }
    if (lastBtnOptions?.closeAfterAction) {
      handleClose()
    }
  }
  return (
    <React.Fragment>
      {mainBtnOptions?.useIcon && (
        <span
          className="duration-600 text-gray-400 hover:text-gray-500 hover:duration-500 cursor-pointer flex gap-1"
          onClick={handleClickOpen}
        >
          <span>{mainBtnOptions.icon} </span>
          <span>{mainBtnOptions.iconText || ''} </span>
        </span>
      )}
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <div className="flex border-b mx-2 py-2 justify-between items-center">
          <h5 className="font-bold">{mainTitle}</h5>
          <AiOutlineCloseCircle
            className="cursor-pointer text-2xl"
            onClick={handleClose}
          />
        </div>
        <DialogContent className="">
          <div className="p-4 border shadow rounded-xl">
            {children}
            {lastBtnOptions && (
              <div className="flex justify-end px-5">
                <div className='text-right'>
                  <button
                    onClick={handleLastBtn}
                    className=' bg-[#ffc132] p-1 px-5 rounded-full text-white transition hover:text-[#ffc132] hover:bg-white border border-transparent hover:border-[#ffc132]'>{lastBtnOptions.btnText}</button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  )
}
