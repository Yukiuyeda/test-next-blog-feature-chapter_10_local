import React, { useEffect, useMemo, useState } from "react";
import Select, { Props, SelectOptionActionMeta } from "react-select";
import { Category } from "@/app/_types/category";

//コンポーネントのProps
export type CategoriesSelectProps = {
  selected: Category[];
  setSelected: (selected: Category[]) => void;
};

//react-selectにわたすための型
type CategoryOption = {
  value: number;
  label: string;
  createdAt?: string;
  upDatedAt?: string;
};

//Option型をCategory型へ変換する関数
const convertToCategory = (args: CategoryOption): Category => {
  return {
    id: args.value,
    name: args.label,
    createdAt: args.createdAt,
    upDatedAt: args.upDatedAt,
  };
};

//Category型をOption型へ変換する関数
const convertToOption = (category: Category): CategoryOption => {
  return {
    label: category.name,
    value: category.id,
    createdAt: category.createdAt,
    upDatedAt: category.upDatedAt,
  };
};

//react-selectを使った、カテゴリー選択コンポーネント
const CategoriesSelect: React.FC<CategoriesSelectProps> = ({
  setSelected,
  selected,
}) => {
  const [categories, setCategories] = useState<Category[]>([]);

  //起動時にcategory一覧取得
  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch("/api/admin/categories");
      const { categories } = await res.json();
      setCategories(categories);
    };
    fetcher();
  }, []);

  console.log(categories);

  const value = selected.map(convertToOption);

  const handleChange = (selectedValue: readonly CategoryOption[]): void => {
    setSelected(selectedValue.map(convertToCategory));
  };

  return (
    <Select
      isMulti={true}
      options={categories.map(convertToOption)}
      onChange={handleChange}
      value={value}
      className=" border-gray-400 border rounded-sm mt-2 mb-4"
      placeholder="カテゴリーを選択してください"
      isSearchable={true}
    />
  );
};

export default CategoriesSelect;
