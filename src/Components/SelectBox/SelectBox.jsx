import { useState } from "react";

import Select from "react-select";

const SelectBox = () => {
    const sortOption = [
        {id: 1, label: 'مرتب سازی پیش فرض', value: 'Default'},
        {id: 2, label: 'مرتب سازی بر اساس محبوبیت', value: 'Popularity'},
        {id: 3, label: 'مرتب سازی بر اساس امتیاز', value: 'Score'},
        {id: 4, label: 'مرتب سازی بر اساس آخرین', value: 'Latest'},
        {id: 5, label: 'مرتب سازی بر اساس ارزان ترین', value: 'Cheapest'},
        {id: 6, label: 'مرتب سازی بر اساس گران ترین', value: 'MostExpensive'}
    ]

    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Select
            className="font-IranSansDN text-amber-600 space-y-0.5"
            defaultValue={sortOption[1]}
            isDisabled={isDisabled}
            isLoading={isLoading}
            isClearable={isClearable}
            isRtl={true}
            isSearchable={isSearchable}
            name="sort"
            onChange={() => setIsLoading(true)}
            options={sortOption}
            placeholder="انتخاب کنید ..."
        />
    )
}

export default SelectBox