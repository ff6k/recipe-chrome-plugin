import React from 'react';
import './Options.css';

import '../../styles/global.css';

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  return <div className="text-2xl">{title} Page</div>;
};

export default Options;
