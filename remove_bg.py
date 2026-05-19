import sys
import subprocess

try:
    from PIL import Image
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

def remove_background(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    # Get the background color from the top-left pixel
    bg_color = datas[0]
    # We will remove pixels that are very similar to the bg_color
    
    newData = []
    # threshold for color similarity
    threshold = 30
    
    for item in datas:
        # Check if the pixel color is close to the bg_color
        if (abs(item[0] - bg_color[0]) < threshold and 
            abs(item[1] - bg_color[1]) < threshold and 
            abs(item[2] - bg_color[2]) < threshold):
            newData.append((255, 255, 255, 0)) # Transparent
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Background removed and saved to {output_path}")

if __name__ == '__main__':
    input_file = r'public\Pico Cabs- icon.png'
    output_file = r'public\Pico Cabs- icon.png'
    remove_background(input_file, output_file)
