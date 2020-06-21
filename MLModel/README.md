# MLModel

Inference code and config files for IterDet object detection model. The codebase also include the social distance script and other crowd analytics tools

## Installation

### Requirements

- Linux or macOS (Windows is not currently officially supported)
- Python 3.6+
- PyTorch 1.3+
- CUDA 9.2+ (If you build PyTorch from source, CUDA 9.0 is also compatible)
- GCC 4.9+
- [mmcv](https://github.com/open-mmlab/mmcv)

### Project Setup

```git clone https://github.com/sgcuber24/hackjaipur-submission.git
cd hackjaipur-submission/MLModel/
pip3 install -e .
```

## Codebase Overview

### Directory Structure

- mmdet/ - contains the train, test and inference scripts for models of pytorch's mmdet framework
- models/ - contains the weights and config files for any Object Detection model
- requirements/ - build information for mmdet setup
- utils/ - scripts for social distancing and crowd analytics

### Important Scripts

- [inference.py](https://github.com/sgcuber24/hackjaipur-submission/blob/master/MLModel/mmdet/apis/inference.py) - Perform a simple forward pass of the loaded object detection model
- [gui.py](https://github.com/sgcuber24/hackjaipur-submission/blob/master/MLModel/utils/gui.py) - Peform camera calibration
- [projection.py](https://github.com/sgcuber24/hackjaipur-submission/blob/master/MLModel/utils/projection.py) - Geometrical transformations
- [violation_check.py](https://github.com/sgcuber24/hackjaipur-submission/blob/master/MLModel/utils/violation_check.py) - Social Distance measurement and violation identification
- [plots.py](https://github.com/sgcuber24/hackjaipur-submission/blob/master/MLModel/utils/plots.py) - Create time-series plots to analyse crowd data
- [visualize.py](https://github.com/sgcuber24/hackjaipur-submission/blob/master/MLModel/utils/visualize.py) - All visualizations such as social distance violations and bird's eye view projections
- [app.py](https://github.com/sgcuber24/hackjaipur-submission/blob/master/MLModel/app.py) - Main script to orchestrate social distance monitoring and crowd analytics tools

## Demo Inference on a video

Download the pre-trained weights

`wget -q https://github.com/saic-vul/iterdet/releases/download/v2.0.0/crowd_human_full_faster_rcnn_r50_fpn_2x.pth`

Specify threshold for OD model and execute the script

`python3 app.py --input_video_path input.mp4 --score_thresh 0.8`
