import "./App.css";
import { useState, useEffect } from "react";

// Component読み込み
import Header from "./components/Header";
import PrefMenuGenerate from "./components/PrefMenuGenerate";

// MUIパーツ読み込み
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function App() {
  const [fieldList, setFieldList] = useState("");
  const [fieldListGoogle, setFieldListGoogle] = useState("");
  const [prefName, setPrefName] = useState("東京都");
  let tel_check = "first";
  // useEffect(() => {
  //   axios
  //     .get("/axios", {
  //       params: {
  //         prefCode: 13,
  //       },
  //     })
  //     .then((res) => {
  //       setMessage(res.data);
  //     });
  // }, []);
  // console.log("message raw data", message);

  return (
    <div className='App'>
      <Grid item container direction='column'>
        <Grid item>
          <Header />
        </Grid>

        <Grid item container>
          <Grid item sm={2}></Grid>

          <Grid item xs={12} sm={8}>
            <div className='top-title-area'>
              <h1>
                都道府県別キャンプ場リスト
                <br />
                Yahoo!ローカルサーチ版
              </h1>
              <p>
                ※ジャンルコードが「キャンプ場」の地点情報を都道府県別に抽出します。
              </p>
            </div>
            <PrefMenuGenerate
              setFieldList={setFieldList}
              setFieldListGoogle={setFieldListGoogle}
              setPrefName={setPrefName}
            />
          </Grid>
          <Grid item sm={2}></Grid>
        </Grid>

        <Grid item container>
          <Grid item sm={2}></Grid>
          <Grid item xs={12} sm={8}>
            <div className='list-title-area'>
              {fieldList && (
                <p>
                  {prefName}は{fieldList.length}件がヒットしました。
                </p>
              )}
            </div>
            <div className='list-area'>
              {fieldList ? (
                <>
                  <p>
                    this is test contents
                    <br />
                    {fieldListGoogle}
                  </p>
                  <TableContainer component={Paper} sx={{ mb: 4 }}>
                    <Table sx={{ maxWidth: 800 }} aria-label='simple table'>
                      <TableHead>
                        <TableRow>
                          <TableCell>No</TableCell>
                          <TableCell align='center'>名前</TableCell>
                          <TableCell align='center'>住所</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {fieldList.map((element, index) => {
                          if (tel_check !== element.tel) {
                            tel_check = element.tel;
                            return (
                              <TableRow
                                key={index}
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell component='th' scope='row'>
                                  {index + 1 + ""}
                                </TableCell>
                                <TableCell align='right'>
                                  {element.name}
                                </TableCell>
                                <TableCell>
                                  {/* prettier-ignore */}
                                  <a
                                    href={encodeURI(`https://map.yahoo.co.jp/search?q=${element.tel}`)}
                                    target='_blank'
                                    rel='noreferrer'
                                  >
                                    {element.addr}
                                  </a>
                                </TableCell>
                              </TableRow>
                            );
                          } else {
                            tel_check = element.tel;
                            return false;
                          }
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </>
              ) : (
                <div className='list-title-area'>
                  <p>都道府県を選択するとリストが表示されます。</p>
                </div>
              )}
            </div>
          </Grid>
          <Grid item sm={2}></Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
