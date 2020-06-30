/** @jsx jsx */
import React from "react";
import { jsx, Box, Flex, Grid } from "theme-ui";

const Categories = ({ children, minBoxSize = "321px" }) => {
  const _Children = React.Children.toArray(children);

  const childElementStyles = {position: 'relative', alignItems: 'center', minHeight: '260px', border: '1px solid', borderColor: 'strokeFaded', bg: 'background', '& > * > div': {color: 'body'}, padding: '19px 33px', borderRadius: '4px', '& > * > div': {mb: '9px'}, '& > * > div:nth-child(3) > a': {fontWeight: '500', fontSize: '24px'}, '& > * > .statusBanner:first-child': {position: 'absolute', maxWidth: '65.29%', right: '16px', top: '16px', width: 'auto'},'& > * > *:only-child': {m: 0},'& > * > svg:first-child, & > * > svg:nth-child(2)': { width: '64px', height: 'auto'}};

  //Column Widths based on item count
  const columnWidth = () => {
    if (_Children.length === 1) { //1 item, full width
      return (`minmax(${minBoxSize}, 1fr)`)
    }

    if (_Children.length === 2 || _Children.length === 4) { // 2 or 4 items (2 x 2)
      return (`minmax(${minBoxSize}, 1fr) minmax(${minBoxSize}, 1fr)`)
    }

    //3 - Infinity Items (3 x 3)
    return (`minmax(${minBoxSize}, 1fr) minmax(${minBoxSize}, 1fr) minmax(${minBoxSize}, 1fr)`)
  }

  //5 Children case should be centered properly. We have to use Flexbox for this case. 
  if (_Children.length === 5) {
    return (
      <Flex sx={{alignItems: 'center', justifyContent: 'center', width: '107.58%', ml: 'calc(-7.58% / 2)', flexDirection: 'row', flexWrap: 'wrap'}}>
        {
        _Children.map((child, index) => {
          return (
            <Flex sx={{...childElementStyles, '&:not(:nth-child(3))': {mr: '16px'}, mb: '21px', maxWidth: 'calc(33% - 8px)'}}>
              {child}
            </Flex>
          )
        })
      }
      </Flex>
    )
  }


  return (
    <Grid gap="21px 16px" columns={columnWidth()} sx={{margin: 'auto', width: '107.58%', ml: 'calc(-7.58% / 2)', mb: '68px'}}> 
    {
      _Children.map((child, index) => {
        return (
          <Flex sx={childElementStyles}>
            {child}
          </Flex>
        )
      })
    }
    </Grid>
  )
};

export default Categories;
