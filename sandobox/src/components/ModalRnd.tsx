import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Rnd } from 'react-rnd';
import { Typography } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

interface ModalRndProps {
  open: boolean;
  onClose: () => void;
}

// 画面サイズに応じた初期位置・サイズ（例：左上から20%ずつ、幅・高さは60%）
const defaultX = window.innerWidth * 0.2;
const defaultY = window.innerHeight * 0.2;
const defaultWidth = window.innerWidth * 0.6;
const defaultHeight = window.innerHeight * 0.6;

const ModalRnd = ({ open, onClose }: ModalRndProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      {/* Modalの内部コンテナのスタイルを調整することで、中央揃えを解除したり位置を固定したりできる */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <Rnd
          default={{
            x: defaultX,
            y: defaultY,
            width: defaultWidth,
            height: defaultHeight,
          }}
          // タイトル部（className "popup-title"）のみがドラッグ操作可能
          dragHandleClassName="popup-title"
          bounds="window"
          style={{
            background: 'white',
            border: '1px solid #ccc',
            boxShadow: '0 2px 8px rgba(0,0,0,0.26)',
            display: 'flex',
            flexDirection: 'column',
            outline: 'none',
          }}
        >
          {/* タイトル領域（ドラッグハンドルとして機能） */}
          <Box
            className="popup-title"
            sx={{
              cursor: 'move',
              backgroundColor: '#1976d2',
              color: 'white',
              padding: '8px 12px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant="h6">タイトル</Typography>
            <CloseRoundedIcon
              onClick={onClose}
              sx={{ mx: 2, cursor: 'pointer' }}
            />
          </Box>
          <Box sx={{ height: '100%' }}>
            <Card sx={{ height: '100%' }}>
              <CardContent
                sx={{
                  height: '100%', // 親の高さに合わせる
                  overflow: 'auto', // コンテンツがはみ出す場合、スクロールさせる
                }}
              >
                content
              </CardContent>
            </Card>
          </Box>
        </Rnd>
      </Box>
    </Modal>
  );
};

export default ModalRnd;
