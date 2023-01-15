import { useState } from "react";
import FetchList from "./FetchList";
import fetchListGoogle from "./FetchListGoogle";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

function PrefMenuGenerate(props) {
  const { setFieldList, setFieldListGoogle, setPrefName } = props;
  const [prefCode, setPrefCode] = useState("");

  // prettier-ignore
  const prefArray = ["北海道", "青森県", "岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県",
    "埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県",
    "岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県",
    "鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県",
    "佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"];

  const handleChange = (e) => {
    console.log("Set pref code--->", e.target.value);
    fetchListGoogle().then((res) => {
      setFieldListGoogle(res.data);
    });
    FetchList(e.target.value + 1).then((res) => {
      setFieldList(res.data);
      setPrefName(prefArray[e.target.value]);
      setPrefCode(e.target.value);
    });
  };

  return (
    <>
      <Box sx={{ minWidth: 300 }}>
        <FormControl fullWidth>
          <InputLabel id='prefMenu'>都道府県を選択してください</InputLabel>
          <Select
            labelId='prefMenu'
            id='prefSelect'
            value={prefCode}
            label='都道府県を選択してください'
            onChange={handleChange}
          >
            {prefArray.map((name, index) => (
              <MenuItem key={index} value={index}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}

export default PrefMenuGenerate;
