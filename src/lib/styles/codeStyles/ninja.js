/*

ninja.js

This file exports a function for drawing a ninja centre piece for a QRCode

  --Geoff Natin 11/1/18 17:41

*/
import React from 'react';

//Returns an SVG Element for a piece of the 'ninja' codeStyle
export function drawNinjaPiece(x,y,modules,pieceProperties,props){

  var orientation = pieceProperties.orientation;
  var pieceType = pieceProperties.pieceType;
  var width = props.size;
  var height = props.size;
  var length = modules.length;
  var xsize = width / (length + 2 * props.padding);
  var ysize = height / (length + 2 * props.padding);
  var px = (x * xsize + props.padding * xsize);
  var py = (y * ysize + props.padding * ysize);

  // !!!! These aren't the proper paths yet
  switch(pieceType){
    case '2b':
      return (<rect x={-(xsize/2)} y={-(ysize/2)} originX={(px+xsize/2)} originY={(py+ysize/2)} rotate={orientation} width={xsize} height={ysize} fill={props.color} />);
    case '1b':
      return (<rect x={-(xsize/2)} y={-(ysize/2)} originX={(px+xsize/2)} originY={(py+ysize/2)} rotate={orientation} width={xsize} height={ysize} fill={props.color} />);
    case '1b3b':
      return (<rect x={-(xsize/2)} y={-(ysize/2)} originX={(px+xsize/2)} originY={(py+ysize/2)} rotate={orientation} width={xsize} height={ysize} fill={props.color} />);
    case '2a1b':
      return (<rect x={-(xsize/2)} y={-(ysize/2)} originX={(px+xsize/2)} originY={(py+ysize/2)} rotate={orientation} width={xsize} height={ysize} fill={props.color} />);
    case '2a1b1a':
      return (<rect x={-(xsize/2)} y={-(ysize/2)} originX={(px+xsize/2)} originY={(py+ysize/2)} rotate={orientation} width={xsize} height={ysize} fill={props.color} />);
    case '2a1b2c':
      return (<rect x={-(xsize/2)} y={-(ysize/2)} originX={(px+xsize/2)} originY={(py+ysize/2)} rotate={orientation} width={xsize} height={ysize} fill={props.color} />);
    case '2a1b2c3b':
      return (<rect x={-(xsize/2)} y={-(ysize/2)} originX={(px+xsize/2)} originY={(py+ysize/2)} rotate={orientation} width={xsize} height={ysize} fill={props.color} />);
    default:
      return (<rect x={-(xsize/2)} y={-(ysize/2)} originX={(px+xsize/2)} originY={(py+ysize/2)} rotate={orientation} width={xsize} height={ysize} fill={props.color} />);
  }
}
