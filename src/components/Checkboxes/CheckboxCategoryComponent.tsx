import { Category } from '@/types/default';
import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import axios from 'axios';
import _ from 'lodash';
import React, { ChangeEvent, useEffect, useState } from 'react';

type CategoryName = string;

function CheckboxCategoryComponent() {
  const [categories, setCategories] = useState<Category[]>();
  useEffect(() => {
    const getCategories = async () => {
      const { data } = await axios({
        method: 'get',
        url: '/api/category',
      });
      setCategories(data.data);
      console.log(data.data);
    };

    getCategories();
  }, []);

  const [selectedCategories, setSelectedCategories] = useState<CategoryName[]>(
    []
  );

  const handleCategoryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = event.target;

    if (checked) {
      setSelectedCategories(_.concat(selectedCategories, name));
    } else {
      setSelectedCategories(
        _.filter(selectedCategories, (category) => category !== name)
      );
    }
  };

  return (
    <Box className="p-4 text-sm">
      <FormGroup>
        {_.map(categories, (category, i) => (
          <Box key={i}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={_.includes(selectedCategories, category.name)}
                  onChange={handleCategoryChange}
                  name={category.name}
                  className="checked:"
                  color="primary"
                />
              }
              label={category.name}
            />
            {_.includes(selectedCategories, category.name) && (
              <Box className="px-6">
                <FormGroup>
                  {_.map(category.subCategories, (subcategory) => (
                    <FormControlLabel
                      key={subcategory.name}
                      control={<Checkbox color="secondary" />}
                      label={subcategory.name}
                    />
                  ))}
                </FormGroup>
              </Box>
            )}
          </Box>
        ))}
      </FormGroup>
    </Box>
  );
}

export default CheckboxCategoryComponent;
