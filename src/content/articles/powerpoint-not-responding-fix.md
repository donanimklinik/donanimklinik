---
title: "PowerPoint Not Responding — Fix"
description: "PowerPoint freezes during editing or slideshow? Disabling hardware acceleration and removing add-ins fixes most PowerPoint freeze problems. Step-by-step guide."
category: software
pillar: "Office Errors"
status: published
official_source_url: "https://support.microsoft.com/en-us/office/powerpoint-isn-t-responding-hangs-or-freezes-652ede6e-e3d2-449a-a07f-8c800dfb948d"
source_last_verified_at: 2026-09-05
written_at: 2026-09-05
published_at: 2026-09-05
read_time: 6
fix_summary: "Disabling hardware graphics acceleration (File › Options › Advanced › Display section) stops most PowerPoint freezes caused by GPU driver conflicts — takes 30 seconds to toggle."
fix_time_display: "~3 min"
fix_difficulty: Easy
schema_type: HowTo
featured: false
top_search_queries:
  - "powerpoint not responding"
  - "powerpoint freezing"
  - "powerpoint hangs"
  - "powerpoint not responding fix"
howto_steps:
  - name: "End the frozen PowerPoint process in Task Manager"
    text: "Press Ctrl + Shift + Esc to open Task Manager. Find Microsoft PowerPoint (POWERPNT.EXE) in the list. If its status shows Not Responding, right-click it and select End Task. Wait 10 seconds before reopening. When PowerPoint restarts after a crash, it will offer to recover your presentation from the AutoRecover file — accept this to restore your most recent unsaved work."
  - name: "Disable hardware acceleration"
    text: "Hardware acceleration is the most common cause of PowerPoint freezing, especially on presentations with many animations, video clips, or high-resolution images. Go to File > Options > Advanced. Scroll to the Display section and check Disable hardware graphics acceleration. Click OK and restart PowerPoint. This forces PowerPoint to use the CPU for rendering instead of the GPU, which eliminates driver-related freezes."
  - name: "Open PowerPoint in Safe Mode and disable add-ins"
    text: "Press Windows + R, type powerpnt /safe, and press Enter. Safe Mode disables all add-ins and custom toolbars. If PowerPoint works normally in Safe Mode but freezes in regular mode, a third-party add-in is causing the problem. Go to File > Options > Add-ins, set the dropdown to COM Add-ins, click Go, and uncheck each add-in to identify the conflicting one. Common culprits are Grammarly, Zoom, and Mentimeter add-ins."
  - name: "Compress images and media in the presentation"
    text: "Presentations with many high-resolution images (over 5 MB each) or embedded video files exhaust memory and cause PowerPoint to freeze during rendering. Go to File > Compress Media > Presentation Quality to reduce embedded video size. For images, select any image, go to Picture Format > Compress Pictures, uncheck Apply only to this picture, and select a lower resolution. This significantly reduces the file's memory footprint."
  - name: "Run Office Quick Repair"
    text: "Go to Control Panel > Programs and Features, find Microsoft 365 or Microsoft Office, click Change, and select Quick Repair. The repair process takes about 2 minutes and replaces corrupted PowerPoint files without requiring internet access. After the repair completes, restart your computer. If freezes continue, run Online Repair, which performs a more thorough reinstallation of all Office components."
faq:
  - q: "Why does PowerPoint freeze only during slideshow playback?"
    a: "Slideshow playback triggers full GPU rendering for animations, transitions, and video. On systems with outdated graphics drivers or when hardware acceleration is enabled on an incompatible GPU, this causes PowerPoint to freeze mid-presentation. Disable hardware acceleration in File > Options > Advanced > Display and update your graphics driver from the manufacturer's website."
  - q: "Why does PowerPoint freeze when I insert an image or video?"
    a: "Inserting large media files forces PowerPoint to compress and embed the file into the presentation, which is a CPU and memory-intensive operation. For images over 5 MB, PowerPoint may appear frozen for up to 60 seconds. Wait before concluding it has crashed. For videos, use Insert > Video > This Device and choose a compressed format (MP4 with H.264) rather than uncompressed AVI or MOV files."
  - q: "How do I recover a PowerPoint presentation after it freezes?"
    a: "When PowerPoint reopens after a crash, it automatically shows the Document Recovery pane with autosaved versions. Select the most recent version and save it with a new name immediately. If the recovery pane does not appear, go to File > Info > Manage Presentation > Recover Unsaved Presentations. PowerPoint's AutoRecover saves a copy every 10 minutes by default."
  - q: "Why does PowerPoint freeze on a specific slide but not others?"
    a: "A specific slide that causes a freeze usually contains a corrupted embedded object, a broken video link, or an animation effect that conflicts with your graphics driver. Try deleting content from that slide one element at a time — start with videos and animated objects — to identify which element triggers the freeze. Replace the problematic element with a re-inserted or compressed version."
  - q: "Does compressing images in PowerPoint reduce visual quality?"
    a: "Compressing to Presentation Quality (220 PPI) maintains excellent visual quality for projected presentations and screen display. Web Quality (150 PPI) is acceptable for presentations viewed on screen but not printed. Email Quality (96 PPI) reduces file size the most but produces noticeably lower quality for large images. For printed handouts or large display screens, use Presentation Quality or no compression."
---

**PowerPoint not responding** means the application freezes during editing, while inserting media, or during slideshow playback — the title bar shows "Not Responding" and all input is ignored. According to Microsoft's official PowerPoint troubleshooting documentation, the most common cause is hardware acceleration interacting with outdated or incompatible graphics drivers, followed by memory exhaustion from presentations with many high-resolution images or embedded videos.

![PowerPoint not responding: hardware acceleration fix, Safe Mode add-in test, media compression, Office Repair — by trigger type](/images/powerpoint-not-responding-fix.svg)

## What causes PowerPoint to freeze and stop responding

**Hardware acceleration and GPU driver conflict** — PowerPoint uses the GPU to render animations, transitions, and video. When the graphics driver is outdated or incompatible, GPU rendering stalls and the entire application freezes. This is the leading cause of PowerPoint freezes, especially during slideshow playback.

**Memory exhaustion from large media** — Presentations with many high-resolution images (embedded at full size), embedded video files, or large audio clips can consume gigabytes of memory. When available memory runs out, PowerPoint freezes while trying to render or compress media.

**Add-in conflict** — Grammarly, Zoom, Mentimeter, and presentation management tools integrate into PowerPoint. After a PowerPoint update, these add-ins can trigger freezes when accessing the PowerPoint object model.

**Corrupted slide or embedded object** — A single slide containing a corrupted embedded object (OLE link, broken video reference, or malformed animation) can cause PowerPoint to freeze whenever it renders that slide.

## How to fix PowerPoint not responding

Start with step 2 — disabling hardware acceleration resolves most freeze cases, especially those that occur during slideshow playback or when scrolling through slides with animations.

## How to verify the fix

Open the presentation that previously caused the freeze. Run the slideshow from the beginning (press F5) and advance through all slides including any with animations or video. If PowerPoint completes the slideshow without freezing, the fix was successful.
